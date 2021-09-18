
import {useState } from 'react';
import CartItems from './components/Cart/CartItems';

import Header from "./components/Layout/Header"
import Meals from './components/Meals/Meals';

import CartProvider  from "./statestore/CartProvider"

function App() {
  const [cartShow,setCartVisible] =  useState(false)

  const showCartControl = () =>{
    setCartVisible(true)
  }

  const hideCartControl = () =>{
    setCartVisible(false)
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartControl}></Header>
      {cartShow && <CartItems onHideCart={hideCartControl}/>} 
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
