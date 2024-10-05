import React, { useState } from 'react';
import Categories from './Categories';
import Products from './Products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCategories, setShowCategories] = useState(true); // To control visibility of Categories

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategories(false); // Hide Categories once a category is clicked
  };

  return (
    <div>
      {/* Conditionally render the Categories component */}
      {showCategories && <Categories onCategoryClick={handleCategoryClick} />}
      {/* Always render Products component */}
      <Products selectedCategory={selectedCategory} />

      {/* Add a button to reset and show the categories again */}
      {!showCategories && (
        <button 
        style = {{
          color:'#000',
          backgroundColor:'#f3fcff',
          border:'None'
        }}
        onClick={() => setShowCategories(true)} 
        >
         Back to Categories
        </button>
      )}
    </div>
  );
};

export default Shop;
