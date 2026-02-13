'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatMessage {
  id: number;
  user: string;
  message: string;
  color: string;
}

export default function ChatOverlay() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sampleMessages = [
    { user: 'StreamPro', message: 'These capture cards are amazing!', color: '#9146ff' },
    { user: 'TechGuru', message: 'Perfect for my setup', color: '#00f593' },
    { user: 'VideoMaster', message: 'Zero latency is a game changer', color: '#0099ff' },
    { user: 'Creator_42', message: 'Just ordered one!', color: '#ff0080' },
    { user: 'LiveStreamer', message: 'Best quality I\'ve seen', color: '#ffb800' },
  ];

  useEffect(() => {
    let messageIndex = 0;
    
    const interval = setInterval(() => {
      const newMessage = {
        ...sampleMessages[messageIndex % sampleMessages.length],
        id: Date.now(),
      };
      
      setMessages(prev => [...prev.slice(-2), newMessage]);
      messageIndex++;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-10 w-80 space-y-2">
      <AnimatePresence mode="popLayout">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            className="chat-bubble px-4 py-3 rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-2">
              <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: msg.color }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold" style={{ color: msg.color }}>
                  {msg.user}
                </p>
                <p className="text-sm text-gray-300">{msg.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
