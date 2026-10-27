import { useState, useEffect, useRef } from 'react';
import { whatsappUrl } from '../../config/wedding';

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
    <section id="rsvp" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 select-none">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-2 text-[#3D2E24]/50 mb-1">
            <span className="font-hand text-lg">~ 🌸 ~</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D2E24] tracking-tight">
            RSVP
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#557A3C] mt-1">
            Celebrate With Us
          </p>

          <p className="font-hand text-lg sm:text-xl text-[#3D2E24]/80 max-w-lg mx-auto mt-2 leading-relaxed">
            Help us save you a little spot in our storybook celebrations! Chat with our wedding sidekick or confirm directly on WhatsApp.
          </p>
        </div>
      </div>

      {/* Storybook Chat Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#FAF4E8]/95 backdrop-blur-xs border-2 border-[#3D2E24]/20 shadow-md overflow-hidden flex flex-col">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#889A80] text-white flex items-center justify-between border-b border-[#3D2E24]/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF4E8] border border-[#3D2E24]/20 flex items-center justify-center text-xl shadow-xs">
                💌
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white leading-none">
                  Wedding Sidekick
                </h3>
                <p className="font-hand text-xs text-white/90 mt-0.5 font-medium">
                  Helping Prithvi &amp; Varshini keep count! ✨
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full font-hand border border-white/30">
              Online &amp; Ready
            </span>
          </div>

          {/* Messages Container */}
          <div
            ref={chatRef}
            className="p-5 sm:p-7 space-y-4 max-h-[380px] min-h-[280px] overflow-y-auto bg-[#FAF4E8]/60"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[78%] p-4 rounded-2xl border font-hand text-lg leading-relaxed whitespace-pre-wrap select-text shadow-2xs ${
                    msg.role === 'ai'
                      ? 'bg-white text-[#3D2E24] border-[#889A80]/30 rounded-tl-none'
                      : 'bg-[#FAF0ED] text-[#3D2E24] font-bold border-[#DE8B7C]/40 rounded-tr-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-[#DE8B7C] border border-[#3D2E24]/15 px-4 py-2 rounded-full text-xs font-hand font-bold flex items-center gap-2 shadow-2xs">
                  <span>Writing to you</span>
                  <span className="animate-bounce">✍️</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Pills */}
          <div className="px-4 py-2.5 bg-[#FAF4E8] border-t border-dashed border-[#3D2E24]/20">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="shrink-0 px-3.5 py-1.5 bg-white hover:bg-[#889A80] hover:text-white text-[#3D2E24] font-hand text-sm font-bold rounded-full border border-[#3D2E24]/20 shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Bar */}
          <div className="p-3 sm:p-4 bg-[#FAF4E8] border-t border-[#3D2E24]/15">
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
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-[#3D2E24]/25 rounded-full font-hand text-lg text-[#3D2E24] placeholder:text-[#3D2E24]/40 focus:outline-hidden focus:ring-2 focus:ring-[#889A80]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#889A80] hover:bg-[#74866C] disabled:opacity-50 text-white font-serif text-sm font-bold uppercase tracking-wider rounded-full border border-[#3D2E24]/15 shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                Send 💌
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
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#889A80] hover:bg-[#74866C] text-white font-serif text-sm sm:text-base font-bold tracking-wide uppercase rounded-full border border-[#3D2E24]/15 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <span className="text-xl">📲</span>
            <span>Prefer WhatsApp? Message Us Directly</span>
          </a>
          <p className="font-hand text-sm text-[#3D2E24]/70 mt-2">
            WhatsApp Line: +91 80882 86893
          </p>
        </div>

      </div>

    </section>
  );
}
