import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fibre, Grain } from './art/Textures';

export function AIAssistantRSVP() {
  const [messages, setMessages] = useState<{ role: 'ai' | 'guest'; content: string; rawContent?: string }[]>([
    {
      role: 'ai',
      content: "Hi! I'm the little AI assistant helping Prithvi & Varshu keep track of their favorite people. ❤️\n\nFirst things first...\n\nWhat's your name, and are you from the bride's side or the groom's side?",
      rawContent: "Hi! I'm the little AI assistant helping Prithvi & Varshu keep track of their favorite people. ❤️\n\nFirst things first...\n\nWhat's your name, and are you from the bride's side or the groom's side?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isRequestPending = useRef(false);
  
  // Track if user has manually scrolled up
  const isAutoScrollEnabled = useRef(true);

  const funnyLoadingPhrases = [
    "Consulting the wedding astrologer 📜✨...",
    "Double-checking the guest list 🧐📝...",
    "Asking Varshu what to say next 🏃‍♀️💨...",
    "Waking up Prithvi for the answer 😴...",
    "Arranging the plantain leaves 🍃🍛...",
    "Polishing the wedding rings 💍✨...",
    "Tying the perfect silk saree pleats 🥻...",
    "Hunting down the event schedule 📅..."
  ];

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      isAutoScrollEnabled.current = scrollHeight - scrollTop - clientHeight < 70;
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current && isAutoScrollEnabled.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: isTyping ? 'smooth' : 'auto' 
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isRequestPending.current) return;
    
    isRequestPending.current = true;
    isAutoScrollEnabled.current = true;
    setLoadingMessage(funnyLoadingPhrases[Math.floor(Math.random() * funnyLoadingPhrases.length)]);
    setIsTyping(true);

    // Add user message
    const newMessages = [...messages, { role: 'guest' as const, content: text, rawContent: text }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.rawContent || m.content
          })),
          stream: true 
        })
      });

      if (!response.body) throw new Error("No response body");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      let fullContent = '';
      let displayContent = '';
      let hasStartedTyping = false;
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // The last line might be incomplete, so keep it in the buffer
        buffer = lines.pop() || '';
        
        for (const line of lines) {
          if (line.trim().startsWith('data: ') && line.trim() !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.trim().slice(6));
              const deltaContent = data.choices[0]?.delta?.content;
              
              if (deltaContent) {
                if (!hasStartedTyping) {
                  hasStartedTyping = true;
                  setIsTyping(false); // turn off the bouncing dots
                  setMessages(prev => [...prev, { role: 'ai', content: '', rawContent: '' }]);
                }
                
                fullContent += deltaContent;
                
                if (fullContent.toUpperCase().includes('<STATE>')) {
                  // Split on case-insensitive <state> using regex
                  displayContent = fullContent.split(/<STATE>/i)[0].trim();
                } else {
                  displayContent = fullContent;
                }
                
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1].content = displayContent;
                  updated[updated.length - 1].rawContent = fullContent;
                  return updated;
                });
                
                // Forcibly sever the connection the millisecond the model finishes the STATE block!
                // This prevents small models from hallucinating infinite loops after the state block.
                if (fullContent.toUpperCase().includes('</STATE>')) {
                   reader.cancel();
                   break;
                }
              }
            } catch (e) {
              // Ignore invalid JSON from LM Studio
            }
          }
        }
        
        // Break the outer while loop if we cancelled the reader inside the for-loop
        if (fullContent.toUpperCase().includes('</STATE>')) {
            break;
        }
      }
      
      // If the model only returned reasoning and no content, fallback gracefully
      if (!hasStartedTyping) {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'ai', content: fullContent || "I'm not sure what to say!", rawContent: fullContent }]);
      }
      
      // Stream finished! Extract the <STATE> block if it exists (case insensitive)
      const stateMatch = fullContent.match(/<STATE>([\s\S]*?)<\/STATE>/i);
      if (stateMatch) {
        try {
          const stateJson = JSON.parse(stateMatch[1]);
          console.log("Extracted Guest State:", stateJson);
          
          if (stateJson.guestName) {
            fetch('/api/rsvp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ state: stateJson })
            })
            .then(() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('guest-blessing-updated', { detail: stateJson.guestName }));
              }
            })
            .catch(e => console.error("Failed to save RSVP state:", e));
          }
        } catch (e) {
          console.error("Failed to parse state json", e);
        }
      }

    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'ai',
        content: "Our little AI concierge is taking a coffee break ☕. But don't worry, your RSVP is safe!"
      }]);
    } finally {
      isRequestPending.current = false;
    }
  };

  return (
    <div 
      data-lenis-prevent="true"
      className="relative w-full max-w-3xl mx-auto h-[65vh] min-h-[480px] bg-[#FBF7EE] rounded-sm overflow-hidden shadow-xl flex flex-col border border-gold/30 z-30"
    >
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(180,137,60,0.15)]" />
      <Fibre />
      <Grain variant="light" />
      
      {/* Header */}
      <div className="relative z-20 px-6 py-6 flex flex-col items-center text-center bg-transparent border-b border-gold/20">
        <h2 className="font-display text-3xl md:text-4xl text-[#3E2410]">Your seat awaits ✨</h2>
        <p className="font-serif text-xs md:text-sm text-[#8A6526] mt-2 tracking-widest uppercase">Tell us a little about yourself. Our concierge will handle the rest.</p>
      </div>

        {/* Chat Area */}
        <div 
          ref={chatContainerRef}
          data-lenis-prevent="true"
          onScroll={handleScroll}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="relative z-20 flex-1 overflow-y-auto overscroll-contain p-4 md:p-8 space-y-6 touch-pan-y custom-chat-scrollbar"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-md px-5 py-4 shadow-sm whitespace-pre-wrap font-serif text-[15px] leading-relaxed border ${
                  msg.role === 'ai' 
                    ? 'bg-white text-[#3E2410] rounded-tl-none border-[#E3CBA8]/60' 
                    : 'bg-forest text-ivory rounded-tr-none border-forest-deep'
                }`}
              >
                {msg.content}
              </div>
            </div>
            
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-[#4A2E15]/70 rounded-2xl rounded-tl-none px-5 py-4 border border-[#E3CBA8]/40 shadow-sm flex flex-col gap-1">
                <span className="text-sm font-medium italic">{loadingMessage}</span>
                <div className="flex gap-1 mt-1">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}>•</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}>•</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}>•</motion.span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Prompts */}
        <div className="relative z-20 px-4 pb-3 pt-2 bg-gradient-to-t from-[#FBF7EE] to-transparent">
          <div 
            data-lenis-prevent="true"
            className="flex gap-2 overflow-x-auto py-2 scrollbar-hide snap-x"
          >
            {[
              "📍 Where is the wedding venue?",
              "⏰ What time does the reception start?",
              "🎁 Do they have a gift registry?",
              "📅 What is the event schedule?",
              "🚗 Is there parking available?",
              "🏨 What about accommodation?"
            ].map((prompt, i) => (
              <button
                key={i}
                onClick={() => setInput(prompt)}
                className="snap-start shrink-0 px-4 py-2 bg-white text-[#3E2410] text-[13px] font-serif rounded-sm border border-gold/30 hover:bg-cream transition-colors shadow-sm whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="relative z-20 p-4 pt-0 bg-[#FBF7EE]">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-white border border-gold/30 rounded-sm pl-6 pr-16 py-4 focus:outline-none focus:ring-1 focus:ring-gold/50 text-[#3E2410] placeholder:text-[#8A6526]/50 font-serif shadow-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-3 bg-forest text-ivory rounded-sm hover:bg-forest-deep disabled:opacity-50 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    
  );
}
