import React, {useState} from 'react';
import { motion } from 'framer-motion';

const AnimationCard = ({ title, category, cssClass, cssCode, onShowCode }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center h-32 bg-purple-300 rounded-md mb-4 group"
      onClick={() => onShowCode(title, cssCode)}
    >
      {/* Only the title is animated */}
      <motion.h3
         className={`text-lg font-semibold cursor-pointer block text-blue-700 ${
          hovered ? cssClass : ''
        }`}
        whileHover={{ 
          scale: 1.1
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
         {category !== 'advanced' ? (
    title
  ) : (
    <div className="w-16 h-16 bg-pink-300 rounded-md "></div>
  )}
      </motion.h3>
      {category === 'advanced' && <p>{title}</p>}
    </div>
  );
};

export default AnimationCard;
