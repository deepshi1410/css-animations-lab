// AnimationGrid.jsx
import React, { useState } from 'react';
import AnimationCard from './AnimationCard'; // Import the AnimationCard component
import Modal from '../Modal/Modal'; // Import the Modal component
import CodeBlock from '../CodeBlock/CodeBlock'; // Import the CodeBlock component
import { animations } from '../../data/animations'; // Import the animations data
import Filter from '../common/Filter'; // Import the Filter component

const AnimationGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Define categories (this should match the categories in the animations data)
  const categories = ['All', 'Hover', 'Loaders', 'Text', 'Transitions', 'Advanced'];

  // Handle card click: open modal with the selected animation's code
  const handleCardClick = (title, code) => {
    setSelectedAnimation({ title, code });
    setModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAnimation(null); // Reset selected animation when closing modal
  };

  // Filter animations based on the selected category
  const filteredAnimations = selectedCategory === 'All'
  ? Object.values(animations).flat()  // Flatten all categories if "All" is selected
  : selectedCategory
  ? animations[selectedCategory.toLowerCase()].map((animation) => ({
      ...animation,
      category: selectedCategory,
    }))  // Handle category-specific filtering
  : [];

  return (
    <div>
      {/* Filter Animations */}
      <Filter categories={categories} onFilterChange={setSelectedCategory} />

      {/* Display Animation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimations.map((animation) => (
          <AnimationCard
            key={animation.title}
            title={animation.title}
            cssClass={animation.cssClass}
            cssCode={animation.cssCode}
            onShowCode={handleCardClick} // Pass the handleCardClick function to open modal on click
          />
        ))}
      </div>

      {/* Modal for displaying code */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {/* Render CodeBlock inside the modal */}
        {selectedAnimation && (
          <CodeBlock code={selectedAnimation.code} language="css" className="mt-4" />
        )}
      </Modal>
    </div>
  );
};

export default AnimationGrid;
