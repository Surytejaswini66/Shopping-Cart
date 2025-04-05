import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { PRODUCTS, FREE_GIFT, THRESHOLD } from "./constants";

function App() {
  const [cart, setCart] = useState([]);

  
  const sortCartItems = (items) => {
    const others = items.filter(item => item.id !== FREE_GIFT.id);
    const gift = items.find(item => item.id === FREE_GIFT.id);
    return gift ? [...others, gift] : others;
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      const updated = exists
        ? prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prev, { ...product, quantity: 1 }];
      return sortCartItems(updated);
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0);
      return sortCartItems(updated);
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  useEffect(() => {
    const hasGift = cart.find((item) => item.id === FREE_GIFT.id);
  
    if (total >= THRESHOLD && !hasGift) {
      setCart((prev) => sortCartItems([...prev, { ...FREE_GIFT, quantity: 1 }]));
    } else if (total < THRESHOLD && hasGift) {
      setCart((prev) => prev.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [cart, total]);
  

  return (
    <>
      <GlobalStyles />

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Shopping Cart</h2>

      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} total={total} />
    </>
  );
}

export default App;