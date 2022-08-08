import React from 'react';
import './Cart.css';

const Cart = ({cartItems, handleAddFruit, handleRemoveFruit, handleCartClear}) => {
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>
        Cart Items
      </div>
      <div className='cart-clear'>
       {cartItems.length >=1 && (
        <button className='clear-button' onClick={handleCartClear}>
          Clear Cart
        </button>
       )}

      </div>

      {cartItems.length === 0 && (
      <div className='cart-items-empty'> Your cart is currently empty. </div>
       )}

       <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <div className="cart-items-name">{item.name}</div>
            <div className='cart-items-quantity'> {item.quantity}</div>
           <div className='cart-items-function'>
             <button 
               className='cart-items-add' 
               onClick={() => handleAddFruit(item)}> + </button>
             <button 
               className='cart-items-remove'
               onClick={() => handleRemoveFruit(item)}> - </button>
           </div>
          </div>
        ))}
       </div>
    </div>
  )
};
export default Cart;