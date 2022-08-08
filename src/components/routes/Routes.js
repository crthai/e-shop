import React from "react";
import Fruits from "../Fruits/Fruits";
import { Route, Routes} from "react-router-dom";
import Cart from '../../pages/Cart/Cart';
import Details from '../../pages/Details/Details';

const RoutesComponents = ({fruits, cartItems, handleAddFruit, handleRemoveFruit, handleCartClear}) => {
  return <div>
  <Routes>
    <Route path="/" element={<Fruits fruits={fruits} handleAddFruit={handleAddFruit}/>} />
    <Route path="/cart" element={<Cart cartItems={cartItems} handleAddFruit={handleAddFruit}
                                                             handleRemoveFruit={handleRemoveFruit} 
                                                             handleCartClear={handleCartClear}/>} />
    <Route path="/details" element={<Details fruits={fruits} handleAddFruit={ handleAddFruit} />} />
  </Routes>

  </div>;
};

export default RoutesComponents;