import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sparkles, Trophy, Users } from 'lucide-react';
import Chatbot from './components/Chatbot';
import GameCard from './components/GameCard';

function App() {
  const featuredGames = [
    {
      title: "Elden Ring",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      description: "Explore a vast open world filled with mystery and challenge in this masterpiece by FromSoftware.",
      link: "https://en.bandainamcoent.eu/elden-ring/elden-ring"
    },
    {
      title: "Cyberpunk 2077",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in Night City, a megalopolis obsessed with power and body modification.",
      link: "https://www.cyberpunk.net"
    },
    {
      title: "Baldur's Gate 3",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      description: "Embark on an epic adventure in the Forgotten Realms in this revolutionary RPG.",
      link: "https://baldursgate3.game"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-gaming-setup-with-neon-lights-3633/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-4 neon-text"
          >
            NeonGamer Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cyan-400"
          >
            Your Ultimate Gaming Guide
          </motion.p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gamepad2, title: "Expert Reviews", desc: "In-depth analysis of the latest games" },
              { icon: Trophy, title: "Pro Tips", desc: "Strategies from top players" },
              { icon: Users, title: "Community", desc: "Connect with fellow gamers" },
              { icon: Sparkles, title: "Latest News", desc: "Stay updated with gaming trends" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-900"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GameCard {...game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Game Recommendations</h2>
          <Chatbot />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 NeonGamer Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;