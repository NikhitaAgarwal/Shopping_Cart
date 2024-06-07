import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ product, onAddToCart }) {
  const title = {
    color: "#0E2F44",
    fontWeight: "bold",
    marginTop: "40px",
    paddingBottom: "25px",
    paddingTop: "25px",
    height: "auto",
    width: "auto",
    backgroundSize: "cover",
  };
  return (
    <div className="container">
      <br></br>
      {/* <img src={shop} /> */}
      <h2 style={title}>SHOP NOW</h2>
      <div className="row">
        {product.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
