import React, {useState} from 'react';
import { motion } from 'framer-motion';

const AnimationCard = ({ title, cssClass, cssCode, onShowCode }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex justify-center items-center h-32 bg-purple-300 rounded-md mb-4 group"
      onClick={() => onShowCode(title, cssCode)}
    >
      {/* Only the title is animated */}
      <motion.h3
         className={`text-lg font-semibold cursor-pointer text-blue-500 ${
          hovered ? cssClass : ''
        }`}
        whileHover={{ 
          scale: 1.1
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {title}
      </motion.h3>
    </div>
  );
};

export default AnimationCard;
