import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/footer";
import AvailableProduct from "./Meals/Availablemeals";
import Cart from "./Components/Cart/cart";

function App() {
  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartisShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <AvailableProduct />
      <Footer />
    </div>
  );
}

export default App;
