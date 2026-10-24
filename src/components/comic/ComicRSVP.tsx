import { useState, useEffect, useRef } from 'react';
import { wedding, whatsappUrl } from '../../config/wedding';

interface ChatMessage {
  role: 'ai' | 'guest';
  content: string;
  rawContent?: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  role: 'ai',
  content:
    "Heyyy! 👋 Welcome to Prithvi & Varshini's little corner of happiness!\n\nI'm their tiny wedding sidekick, here to help you find all the details and make sure you don't miss the fun. 💌\n\nFirst things first... what's your name, and are you joining us from the bride's side or groom's side?",
};

const SUGGESTIONS = [
  '📍 Where is the venue?',
  '⏰ When does the party start?',
  '💍 What is the wedding schedule?',
  '🎉 Save my seat! Attending with family',
  '💌 I have a warm wish for the couple!',
];

export function ComicRSVP() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const isPending = useRef(false);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isPending.current) return;

    isPending.current = true;
    setIsTyping(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'guest', content: text, rawContent: text },
    ];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.rawContent || m.content,
          })),
          stream: true,
        }),
      });

      if (!response.body) throw new Error('No stream');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let fullContent = '';
      let displayContent = '';
      let hasStarted = false;
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim().startsWith('data: ') && line.trim() !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.trim().slice(6));
              const delta = data.choices[0]?.delta?.content;

              if (delta) {
                if (!hasStarted) {
                  hasStarted = true;
                  setIsTyping(false);
                  setMessages((prev) => [...prev, { role: 'ai', content: '', rawContent: '' }]);
                }

                fullContent += delta;

                if (fullContent.toUpperCase().includes('<STATE>')) {
                  displayContent = fullContent.split(/<STATE>/i)[0].trim();
                } else {
                  displayContent = fullContent;
                }

                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1].content = displayContent;
                  updated[updated.length - 1].rawContent = fullContent;
                  return updated;
                });

                if (fullContent.toUpperCase().includes('</STATE>')) {
                  reader.cancel();
                  break;
                }
              }
            } catch {
              // ignore
            }
          }
        }

        if (fullContent.toUpperCase().includes('</STATE>')) {
          break;
        }
      }

      if (!hasStarted) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: 'ai',
            content: fullContent || 'Thank you for your message! How else may I help with your RSVP?',
            rawContent: fullContent,
          },
        ]);
      }

      // Check for <STATE> tag to persist RSVP
      const stateMatch = fullContent.match(/<STATE>([\s\S]*?)<\/STATE>/i);
      if (stateMatch) {
        try {
          const stateJson = JSON.parse(stateMatch[1]);
          if (stateJson.guestName) {
            fetch('/api/rsvp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ state: stateJson }),
            })
              .then(() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(
                    new CustomEvent('guest-blessing-updated', { detail: stateJson.guestName })
                  );
                }
              })
              .catch((e) => console.error('Failed to save RSVP:', e));
          }
        } catch (e) {
          console.error('Failed to parse state json', e);
        }
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "Our little concierge is sipping filter coffee ☕! But don't worry, you can message the couple directly via WhatsApp below!",
        },
      ]);
    } finally {
      isPending.current = false;
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-16 sm:py-24 bg-[#FAF7F0] overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 select-none">
        <span className="font-comic text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4527D] block">
          ~ Your Presence = Our Happiness ❤️ ~
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2A1D18] tracking-tight mt-1">
          So... are you coming?
        </h2>

        <p className="font-comic text-base sm:text-lg text-[#2A1D18]/80 max-w-lg mx-auto mt-2">
          Help us save you a little spot in our storybook celebrations!
        </p>
      </div>

      {/* Comic Chat Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#FFF9ED] border-4 border-[#2A1D18] shadow-[8px_10px_0px_#2A1D18] overflow-hidden flex flex-col">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#6A9A4A] border-b-3 border-[#2A1D18] text-[#FFF9ED] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5B738] border-2 border-[#2A1D18] flex items-center justify-center text-xl shadow-xs">
                💌
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FFF9ED] leading-none">
                  Wedding Sidekick
                </h3>
                <p className="font-comic text-xs text-[#FAF7F0] mt-0.5 font-medium">
                  Helping Prithvi &amp; Varshu keep count! ✨
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-[#487A38] text-[#FFF9ED] text-xs font-bold rounded-full font-comic border border-[#2A1D18]">
              Ready!
            </span>
          </div>

          {/* Messages Container */}
          <div
            ref={chatRef}
            className="p-5 sm:p-7 space-y-4 max-h-[380px] min-h-[280px] overflow-y-auto bg-[#FFF9ED]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[78%] p-4 rounded-2xl border-2 border-[#2A1D18] font-comic text-base sm:text-lg leading-relaxed whitespace-pre-wrap select-text ${
                    msg.role === 'ai'
                      ? 'bg-[#FAF7F0] text-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] rounded-tl-none'
                      : 'bg-[#F5B738] text-[#2A1D18] font-bold shadow-[2px_3px_0px_#2A1D18] rounded-tr-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#FAF7F0] text-[#D4527D] border-2 border-[#2A1D18] px-4 py-2 rounded-full text-xs font-comic font-bold flex items-center gap-2 shadow-xs">
                  <span>Writing to you</span>
                  <span className="animate-bounce">✍️</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Pills */}
          <div className="px-4 py-2.5 bg-[#FAF7F0] border-t-2 border-dashed border-[#2A1D18]/25">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="shrink-0 px-3.5 py-1.5 bg-[#FFF9ED] hover:bg-[#F5B738] text-[#2A1D18] font-comic text-xs font-bold rounded-full border-2 border-[#2A1D18] shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Bar */}
          <div className="p-3 sm:p-4 bg-[#FAF7F0] border-t-3 border-[#2A1D18]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message or ask a question..."
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#FFF9ED] border-2 border-[#2A1D18] rounded-full font-comic text-base text-[#2A1D18] placeholder:text-[#2A1D18]/45 focus:outline-hidden focus:ring-2 focus:ring-[#F5B738]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#E8769D] hover:bg-[#d85c86] disabled:opacity-50 text-[#2A1D18] font-comic text-sm font-bold uppercase tracking-wider rounded-full border-2 border-[#2A1D18] shadow-[2px_2px_0px_#2A1D18] transition-transform active:scale-95 cursor-pointer"
              >
                Send 🚀
              </button>
            </form>
          </div>

        </div>

        {/* WhatsApp Alternative */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#6A9A4A] hover:bg-[#59843e] text-[#FFF9ED] font-comic text-base font-bold rounded-full border-2 border-[#2A1D18] shadow-[3px_4px_0px_#2A1D18] transition-all active:scale-95 cursor-pointer"
          >
            <span className="text-xl">📲</span>
            <span>Prefer WhatsApp? Message Us Directly</span>
          </a>
          <p className="font-comic text-xs text-[#2A1D18]/70 mt-2">
            WhatsApp Line: +{wedding.rsvp.whatsappNumber}
          </p>
        </div>

      </div>

    </section>
  );
}
