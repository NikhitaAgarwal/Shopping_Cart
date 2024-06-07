import "./App.css";
// import "./images";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

const product = [
  {
    id: "1",
    name: "Leather Tote Bag",
    price: 1000,
    images: "./images/img1.jpg",
  },
  { id: "2", name: "Luxury Bag", price: 2000, images: "./images/img2.jpg" },
  {
    id: "3",
    name: "women leather handbag",
    price: 2999,
    images: "./images/img3.jpg",
  },
  {
    id: "4",
    name: "Wine Red HandBag",
    price: 999,
    images: "./images/img4.jpg",
  },
  {
    id: "5",
    name: "Croco Texture Bag",
    price: 3000,
    images: "./images/img5.webp",
  },
  { id: "6", name: "Gucci HandBag", price: 5000, images: "./images/img6.jpg" },
];
function App() {
  const [cartItems, setcartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setcartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((items) => items.id === product.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setcartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductList product={product} onAddToCart={handleAddToCart} />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />

          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
