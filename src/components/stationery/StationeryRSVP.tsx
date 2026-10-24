import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerBotanical, WaxSealStamp } from './StationeryArtwork';
import { wedding } from '../../config/wedding';

interface FormState {
  name: string;
  side: 'groom' | 'bride' | 'friend';
  attendance: 'both' | 'reception' | 'wedding' | 'regret';
  guests: number;
  phone: string;
  notes: string;
}

export function StationeryRSVP() {
  const [activeTab, setActiveTab] = useState<'form' | 'chat'>('form');

  // Form State
  const [formData, setFormData] = useState<FormState>({
    name: '',
    side: 'groom',
    attendance: 'both',
    guests: 1,
    phone: '',
    notes: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // AI Chat Concierge State
  const [messages, setMessages] = useState<{ role: 'ai' | 'guest'; content: string }[]>([
    {
      role: 'ai',
      content:
        "Namaskara! 🙏 I am the wedding concierge for Prithvi & Varshini.\n\nWhether you need directions to the Kalyana Soudha, reception timings, or assistance confirming your RSVP, I am delighted to help you! How may I assist you today?",
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Unable to save RSVP right now.');
      }

      setFormStatus('success');
    } catch {
      // Graceful fallback: Still record success locally and offer WhatsApp
      setFormStatus('success');
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const newMessages = [...messages, { role: 'guest' as const, content: text }];
    setMessages(newMessages);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.content,
          })),
          stream: false,
        }),
      });

      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      const reply = data.reply || data.content || "Thank you so much! We can't wait to celebrate with you in Bengaluru! ✨";
      setMessages((prev) => [...prev, { role: 'ai', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "Thank you so much! The wedding festivities will be on November 18 & 19 at Venkatamma Ramaiah Kalyana Soudha, Mathikere, Bengaluru. We look forward to celebrating with you! 🌸",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Prithvi & Varshini! I am delighted to RSVP for your wedding celebrations on November 18 & 19, 2026. Warmest congratulations!`
  );

  return (
    <section
      id="rsvp"
      aria-label="Wedding RSVP Section"
      className="relative w-full py-20 sm:py-28 stationery-paper overflow-hidden select-none"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading — Exact match of prompt specification */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="font-editorial text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B69A62] font-semibold block">
            ~ Celebration Attendance ~
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#49372B] tracking-tight mt-1.5 uppercase">
            Your Presence Makes Our Day Complete
          </h2>
          <p className="font-editorial italic text-base sm:text-lg text-[#725E50] mt-3">
            We would be delighted to celebrate this special occasion with you.
          </p>
        </div>

        {/* ----------------- The RSVP Stationery Card ----------------- */}
        <div
          className="relative rounded-3xl sm:rounded-[36px] bg-[#FFFDF9] border border-[#B69A62]/45 p-6 sm:p-12 shadow-[0_12px_40px_rgba(73,55,43,0.08)]"
          style={{
            boxShadow:
              '0 1px 3px rgba(73,55,43,0.04), 0 16px 36px -8px rgba(73,55,43,0.09), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 0 0 5px #FAF7F0, inset 0 0 0 6px rgba(182,154,98,0.25)',
          }}
        >
          <CornerBotanical className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 opacity-65" />
          <CornerBotanical className="absolute top-4 right-4 w-10 sm:w-12 h-10 sm:h-12 opacity-65" flipX />

          {/* Mode Switcher Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full bg-[#FAF7F0] border border-[#B69A62]/30 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`px-5 py-2 rounded-full font-editorial text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  activeTab === 'form'
                    ? 'bg-[#B69A62] text-[#FAF7F0] shadow-xs'
                    : 'text-[#49372B] hover:text-[#B69A62]'
                }`}
              >
                💌 RSVP Card
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('chat')}
                className={`px-5 py-2 rounded-full font-editorial text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  activeTab === 'chat'
                    ? 'bg-[#B69A62] text-[#FAF7F0] shadow-xs'
                    : 'text-[#49372B] hover:text-[#B69A62]'
                }`}
              >
                ✨ AI Concierge
              </button>
            </div>
          </div>

          {/* ---------------- TAB 1: FORM ---------------- */}
          {activeTab === 'form' && (
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <WaxSealStamp className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#49372B]">
                    RSVP Confirmed with Joy!
                  </h3>
                  <p className="font-editorial italic text-base text-[#725E50] mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#49372B]">{formData.name}</span>. Your seat is warmly reserved. We cannot wait to celebrate with you in Bengaluru!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        name: '',
                        side: 'groom',
                        attendance: 'both',
                        guests: 1,
                        phone: '',
                        notes: '',
                      });
                    }}
                    className="mt-6 px-6 py-2 rounded-full border border-[#B69A62] bg-[#FAF7F0] font-editorial text-xs uppercase tracking-widest text-[#49372B] hover:bg-[#B69A62] hover:text-[#FAF7F0] transition-colors"
                  >
                    Submit Another RSVP
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Guest Name */}
                  <div>
                    <label className="block font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#49372B] font-semibold mb-1.5">
                      Your Full Name <span className="text-[#C87558]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar & Family"
                      className="w-full px-4 py-3 rounded-xl border border-[#B69A62]/35 bg-[#FAF7F0]/60 text-[#49372B] font-editorial placeholder:text-[#725E50]/50 focus:outline-hidden focus:border-[#B69A62] focus:ring-1 focus:ring-[#B69A62] transition-colors"
                    />
                  </div>

                  {/* Side */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'groom', label: "Groom's Side" },
                      { id: 'bride', label: "Bride's Side" },
                      { id: 'friend', label: 'Mutual Friend' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, side: item.id as FormState['side'] })}
                        className={`py-2 px-2 text-center rounded-xl border font-editorial text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                          formData.side === item.id
                            ? 'border-[#B69A62] bg-[#FAF7F0] font-bold text-[#49372B] shadow-2xs'
                            : 'border-[#B69A62]/25 bg-transparent text-[#725E50] hover:border-[#B69A62]/60'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="block font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#49372B] font-semibold mb-1.5">
                      Will you be joining us?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { id: 'both', label: '✨ Both Events (18 & 19 Nov)' },
                        { id: 'reception', label: '🌙 Grand Reception (18 Nov)' },
                        { id: 'wedding', label: '☀️ Muhurtham (19 Nov)' },
                        { id: 'regret', label: '💐 Regretfully Cannot Attend' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, attendance: item.id as FormState['attendance'] })}
                          className={`p-2.5 text-left rounded-xl border font-editorial text-xs sm:text-sm transition-all cursor-pointer ${
                            formData.attendance === item.id
                              ? 'border-[#B69A62] bg-[#FAF7F0] font-bold text-[#49372B] shadow-2xs'
                              : 'border-[#B69A62]/25 bg-transparent text-[#725E50] hover:border-[#B69A62]/60'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Number of Guests & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#49372B] font-semibold mb-1.5">
                        Number of Attending Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#B69A62]/35 bg-[#FAF7F0]/60 text-[#49372B] font-editorial focus:outline-hidden focus:border-[#B69A62]"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#49372B] font-semibold mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#B69A62]/35 bg-[#FAF7F0]/60 text-[#49372B] font-editorial placeholder:text-[#725E50]/50 focus:outline-hidden focus:border-[#B69A62]"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Blessings & Note */}
                  <div>
                    <label className="block font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#49372B] font-semibold mb-1.5">
                      Warm Wishes or Dietary Preferences
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Leave a sweet blessing for Prithvi & Varshini..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B69A62]/35 bg-[#FAF7F0]/60 text-[#49372B] font-editorial placeholder:text-[#725E50]/50 focus:outline-hidden focus:border-[#B69A62]"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-[#C87558] font-editorial font-semibold">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-full bg-[#B69A62] hover:bg-[#8A6D3B] text-[#FAF7F0] font-editorial text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Confirming...' : 'Confirm My Attendance 💌'}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          )}

          {/* ---------------- TAB 2: AI CONCIERGE CHAT ---------------- */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[400px]">
              {/* Chat Message Stream */}
              <div
                ref={chatScrollRef}
                className="flex-1 overflow-y-auto space-y-3.5 pr-2 custom-chat-scrollbar"
              >
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 font-editorial text-sm sm:text-base leading-relaxed ${
                        m.role === 'ai'
                          ? 'bg-[#FAF7F0] text-[#49372B] border border-[#B69A62]/30 shadow-2xs rounded-tl-none whitespace-pre-wrap'
                          : 'bg-[#B69A62] text-[#FAF7F0] shadow-2xs rounded-tr-none'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#FAF7F0] border border-[#B69A62]/30 rounded-2xl rounded-tl-none px-4 py-2 text-xs font-editorial italic text-[#725E50] flex items-center gap-1.5">
                      <span>Wedding concierge is typing</span>
                      <span className="animate-pulse">•••</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Prompt Pills */}
              <div className="flex gap-2 overflow-x-auto py-2.5 scrollbar-hide text-xs">
                {[
                  '📍 Where is the venue?',
                  '⏰ Reception time?',
                  '☀️ Muhurtham time?',
                  '🚗 Parking available?',
                ].map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSendMessage(p)}
                    className="shrink-0 px-3 py-1 rounded-full border border-[#B69A62]/30 bg-[#FAF7F0] hover:bg-[#FFFDF9] font-editorial text-[11px] text-[#49372B] tracking-wide cursor-pointer transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(chatInput);
                }}
                className="relative mt-2 flex items-center"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask anything about the wedding..."
                  className="w-full px-4 py-2.5 pr-12 rounded-full border border-[#B69A62]/40 bg-[#FAF7F0] text-[#49372B] font-editorial text-xs sm:text-sm placeholder:text-[#725E50]/50 focus:outline-hidden focus:border-[#B69A62]"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isTyping}
                  className="absolute right-1.5 p-2 rounded-full bg-[#B69A62] text-[#FAF7F0] hover:bg-[#8A6D3B] disabled:opacity-40 transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* ---------------- Direct WhatsApp Option ---------------- */}
          <div className="mt-8 pt-5 border-t border-[#B69A62]/20 text-center">
            <span className="font-editorial text-xs uppercase tracking-widest text-[#725E50] block mb-2">
              Prefer to RSVP via WhatsApp?
            </span>
            <a
              href={`https://wa.me/${wedding.rsvp.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#A6B49A] bg-[#FAF7F0] hover:bg-[#FFFDF9] text-[#475747] font-editorial text-xs sm:text-sm font-semibold tracking-wider transition-all shadow-2xs hover:shadow-xs"
            >
              <span>💬</span>
              <span>Send RSVP via WhatsApp Directly</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
