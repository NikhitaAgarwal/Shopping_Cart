import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setquantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setquantity(1);
  };
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img src={product.images} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h4 className="card-Name">{product.name}</h4>
          <p className="card-Price">${product.price}</p>
          <input
            type="number"
            min="1"
            className="form-control mb-2"
            value={quantity}
            onChange={(e) => setquantity(parseInt(e.target.value))}
          />
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
