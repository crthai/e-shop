import React from 'react';
import "./Fruits.css";


const Fruits = ({fruits, handleAddFruit}) => {
  return (
   <div className='fruits'>
    {fruits.map((fruit) => (
      <div className='card'>
        <div>
          <h3 className='fruit.name'>
          {fruit.name}
          </h3>
        </div>
        <div>
          <button className='product-add-button' onClick={() => handleAddFruit(fruit)}>Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Fruits