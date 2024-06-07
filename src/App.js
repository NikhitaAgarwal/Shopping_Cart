import "./App.css";
// import "./images";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.jpg";

const product = [
  {
    id: "1",
    name: "Leather Tote Bag",
    price: 1000,
    images: img1,
  },
  { id: "2", name: "Luxury Bag", price: 2000, images: img2 },
  {
    id: "3",
    name: "women leather handbag",
    price: 2999,
    images: img3,
  },
  {
    id: "4",
    name: "Wine Red HandBag",
    price: 999,
    images: img4,
  },
  {
    id: "5",
    name: "Croco Texture Bag",
    price: 3000,
    images: img5,
  },
  { id: "6", name: "Gucci HandBag", price: 5000, images: img6 },
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
