import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from './AnimationCard';
import Modal from '../Modal/Modal';
import Filter from '../common/Filter';
import { loadAnimations } from '../../data/animations/index';

const CodeBlock = React.lazy(() => import('../codeblock/CodeBlock'));

const AnimationGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is "All"
  const [filteredAnimations, setFilteredAnimations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', 'Hover', 'Loaders', 'Text', 'Transitions', 'Advanced'];

  // Function to load animations
  const fetchAnimations = async (category) => {
    try {
      if (category === 'All') {
        const allCategories = await Promise.all(
          categories
            .filter((cat) => cat !== 'All') // Exclude "All" from dynamic imports
            .map((cat) => loadAnimations(cat.toLowerCase()))
        );
        return allCategories.flat(); // Combine all animations
      } else {
        const animations = await loadAnimations(category.toLowerCase());
        return animations;
      }
    } catch (error) {
      console.error(`Error loading animations for category "${category}":`, error);
      return []; // Return an empty array on error
    }
  };

  // Load animations on category change
  useEffect(() => {
    const loadFilteredAnimations = async () => {
      setIsLoading(true); // Show loading indicator
      const animations = await fetchAnimations(selectedCategory);
      setFilteredAnimations(animations || []); // Ensure it's an array
      setIsLoading(false); // Hide loading indicator
    };

    loadFilteredAnimations();
  }, [selectedCategory]);

  const handleCardClick = (title, code) => {
    setSelectedAnimation({ title, code });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAnimation(null);
  };

  return (
    <div>
      {/* Filter Component */}
      <Filter categories={categories} onFilterChange={setSelectedCategory} />

      {/* Loading State */}
      {isLoading ? (
        <div>Loading animations...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimations.map((animation, index) => (
            animation && ( // Ensure animation object exists
              <motion.div
                key={animation.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.05, // Optional stagger effect
                }}
              >
                <AnimationCard
                  title={animation.title}
                  cssClass={animation.cssClass}
                  cssCode={animation.cssCode}
                  onShowCode={handleCardClick}
                />
              </motion.div>
            )
          ))}
        </div>
      )}

      {/* Modal for CodeBlock */}
      {modalOpen && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Modal isOpen={modalOpen} onClose={handleCloseModal}>
            {selectedAnimation && (
              <React.Suspense fallback={<div>Loading code...</div>}>
                <CodeBlock code={selectedAnimation.code} language="css" className="mt-4" />
              </React.Suspense>
            )}
          </Modal>
        </React.Suspense>
      )}
    </div>
  );
};

export default AnimationGrid;
