import { useState, useEffect, useRef } from 'react';
import { CeramicDaisy, SquigglyWave } from './CeramicOrnaments';
import { wedding, whatsappUrl } from '../../config/wedding';

interface ChatMessage {
  role: 'ai' | 'guest';
  content: string;
  rawContent?: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  role: 'ai',
  content:
    "Hello and a warm welcome! 🌸\n\nI'm the dedicated wedding concierge for Prithvi & Varshini. I'm here to assist you with event details, venue directions, and confirming your seat for the celebrations.\n\nTo begin, may I know your name and whether you are attending from the bride's side or groom's side?",
};

const SUGGESTIONS = [
  '📍 Where is the venue located?',
  '⏰ What time does the reception start?',
  '💍 What is the wedding itinerary?',
  '🚗 Is parking available at the hall?',
  '🎉 I will be attending with my family!',
];

export function CeramicRSVP() {
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
            content: fullContent || 'Thank you for your message! How else may I assist your RSVP?',
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
            "Our concierge is momentarily unavailable, but your response is valued. You may also RSVP via WhatsApp below!",
        },
      ]);
    } finally {
      isPending.current = false;
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-16 sm:py-24 bg-[#FAF4E8] overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D45D52]">
            Guest Reservations
          </span>
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#6B2634]">
          Celebrate With Us
        </h2>

        <div className="flex justify-center my-2">
          <SquigglyWave className="w-20 h-4 text-[#D45D52]" />
        </div>

        <p className="font-sans text-sm sm:text-base text-[#2A1F1E]/75 max-w-lg mx-auto">
          Please confirm your presence so we can reserve your traditional South Indian feast.
        </p>
      </div>

      {/* Ceramic RSVP Chat Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#FFFBF3] border border-[#2A1F1E]/15 shadow-[0_16px_40px_rgba(70,40,35,0.08)] overflow-hidden flex flex-col">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#6B2634] text-[#FFFBF3] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFBF3] flex items-center justify-center text-lg">
                🌸
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#FFFBF3] leading-none">
                  Wedding Concierge
                </h3>
                <p className="font-sans text-[11px] text-[#DCE4D8] mt-0.5">
                  Instant RSVP &amp; Event Guidance
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-[#521B26] text-[#EDB355] text-xs font-bold rounded-full font-sans uppercase tracking-wider">
              Online
            </span>
          </div>

          {/* Messages Container */}
          <div
            ref={chatRef}
            className="p-5 sm:p-7 space-y-4 max-h-[380px] min-h-[280px] overflow-y-auto bg-[#FFFBF3]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-[20px] font-sans text-sm sm:text-base leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'ai'
                      ? 'bg-[#FAF4E8] text-[#2A1F1E] border border-[#2A1F1E]/10 rounded-tl-sm'
                      : 'bg-[#6B2634] text-[#FFFBF3] font-medium rounded-tr-sm shadow-xs'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#FAF4E8] text-[#D45D52] border border-[#2A1F1E]/10 px-4 py-2.5 rounded-full text-xs font-sans font-semibold flex items-center gap-2">
                  <span>Concierge is writing</span>
                  <span className="animate-pulse">•••</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Pills */}
          <div className="px-4 py-2.5 bg-[#FAF4E8] border-t border-[#2A1F1E]/10">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="shrink-0 px-3.5 py-1.5 bg-[#FFFBF3] hover:bg-[#F1D6CC] text-[#2A1F1E] font-sans text-xs font-medium rounded-full border border-[#2A1F1E]/15 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Bar */}
          <div className="p-4 bg-[#FAF4E8] border-t border-[#2A1F1E]/10">
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
                placeholder="Type your message or guest count..."
                className="flex-1 px-5 py-3 bg-[#FFFBF3] border border-[#2A1F1E]/20 rounded-full font-sans text-sm text-[#2A1F1E] placeholder:text-[#2A1F1E]/45 focus:outline-hidden focus:border-[#6B2634] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-6 py-3 bg-[#6B2634] hover:bg-[#521B26] disabled:opacity-50 text-[#FFFBF3] font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-transform active:scale-95 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* WhatsApp Alternative matching reference pill buttons */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3A4C37] hover:bg-[#2B3929] text-[#FFFBF3] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>💬</span>
            <span>Prefer WhatsApp? Message Us Directly</span>
          </a>
          <p className="font-sans text-xs text-[#2A1F1E]/60 mt-2">
            Direct RSVP line: +{wedding.rsvp.whatsappNumber}
          </p>
        </div>

      </div>

    </section>
  );
}
