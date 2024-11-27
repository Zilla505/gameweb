import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function GameCard({ title, image, description, link }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="game-card bg-gray-900 rounded-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-cyan-400 mb-2 neon-text">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Learn More <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}