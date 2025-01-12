import React from 'react';

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className="px-4 py-2 m-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
