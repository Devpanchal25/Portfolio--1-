
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { Message } from '../types';
import { gemini } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am Dev\'s AI Assistant. Ask me anything about his skills, projects, or education!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await gemini.chat(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Chat reset. How can I help you today?' }]);
  };

  return (
    <section id="aichat" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-violet-500/10 rounded-2xl text-violet-500 mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-heading mb-4">Ask My Portfolio</h2>
          <p className="text-zinc-500">I've trained an AI on my resume data. Go ahead, ask it about my experience!</p>
        </div>

        <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-[600px] border-zinc-800 shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Dev's Career AI</h3>
                <span className="text-[10px] text-green-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-2 text-zinc-500 hover:text-white transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-zinc-800 ml-2' : 'bg-violet-600 mr-2'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-white text-black rounded-tr-none' : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-tl-none'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center mr-2">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-2xl rounded-tl-none italic text-sm flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Dev's AI is thinking...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 bg-zinc-900/50 border-t border-zinc-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something about Dev..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500 disabled:opacity-50 disabled:hover:bg-violet-600 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
