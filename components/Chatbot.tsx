import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const gameRecommendations = {
  'action': ['God of War Ragnarök', 'Elden Ring', 'Spider-Man 2'],
  'rpg': ['Baldur\'s Gate 3', 'Final Fantasy XVI', 'Starfield'],
  'strategy': ['Civilization VI', 'XCOM 2', 'Into the Breach'],
  'indie': ['Hades', 'Hollow Knight', 'Stardew Valley'],
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([
    { text: "Hey gamer! I can help you find your next favorite game. What genre interests you? (action/rpg/strategy/indie)", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);

    // Simple bot logic
    const response = generateResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages([...newMessages, { text: response, isBot: true }]);
    }, 500);

    setInput('');
  };

  const generateResponse = (input: string) => {
    for (const [genre, games] of Object.entries(gameRecommendations)) {
      if (input.includes(genre)) {
        return `Here are some amazing ${genre.toUpperCase()} games I recommend:\n${games.join('\n')}`;
      }
    }
    return "I'm not sure about that. Try asking about action, rpg, strategy, or indie games!";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="chatbot-gradient rounded-lg p-4 max-w-md w-full mx-auto neon-border"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-6 h-6 text-cyan-400" />
        <h3 className="text-xl font-bold text-cyan-400 neon-text">GameBot</h3>
      </div>
      
      <div className="h-96 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${
              message.isBot 
                ? 'bg-gray-800 text-white' 
                : 'bg-cyan-500 text-white'
            }`}>
              <p className="whitespace-pre-line">{message.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Ask about game recommendations..."
        />
        <button
          onClick={handleSend}
          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg p-2 transition-colors"
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
}