import './App.css';
import data from "./back/data/Data";
import RoutesComponents from "../src/components/routes/Routes";
import Header from "./components/Header/Header";
import React, { useState } from 'react';


function App() {
  const { fruits } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddFruit = (fruit) => {
    const FruitExist = cartItems.find(item => item.id === fruit.id);
    if(FruitExist){
      setCartItems(cartItems.map((item) => item.id === fruit.id ?
      {...FruitExist, quantity: FruitExist.quantity + 1}: item));
     } else {
     setCartItems([...cartItems, {...fruit, quantity: 1 }]);
      }
    };

  const handleRemoveFruit = (fruit) => {
   const FruitExist = cartItems.find((item) => item.id === fruit.id);
   if(FruitExist.quantity === 1){
     setCartItems(cartItems.filter((item) => item.id !== fruit.id));
   } else {
    setCartItems(
      cartItems.map((item) => item.id === fruit.id ? {...FruitExist, quantity: FruitExist - 1}: item
    )
    );
   }
  };

  const handleCartClear = () => {
    setCartItems([]);
  }

  return <div>
   <Header />
   <RoutesComponents 
     fruits={fruits}
     cartItems={cartItems}
     handleAddFruit={handleAddFruit} 
     handleRemoveFruit={handleRemoveFruit}
     handleCartClear={handleCartClear}
    />
  </div>
}
export default App;
