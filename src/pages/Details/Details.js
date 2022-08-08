import React from 'react';
import "./Details.css";


const Details = ({fruits, handleAddFruit}) => {
  return (
    fruits.map(fruit => (
      <div className='details'>
        <div className='title'> Nutritions Values  of {fruit.name}</div>
        <div className='box'>
          <div className='row'>
            <p className='value'>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
            <p className='value'>Protein: {fruit.nutritions.protein}</p>
            <p className='value'>Fat: {fruit.nutritions.fat}</p>
            <p className='value'>Calories: {fruit.nutritions.calories}</p>
            <p className='value'>Sugar: {fruit.nutritions.sugar}</p>
          </div>
        </div>
        <button className='cart-button' onClick={() => handleAddFruit(fruit)}> Add to cart </button>
      </div>
    ))
  );
};

export default Details