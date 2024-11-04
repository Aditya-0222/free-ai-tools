import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => setSelectedCategory('')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !selectedCategory
            ? 'bg-purple-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}