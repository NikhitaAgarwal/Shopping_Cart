import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, onRemoveFromCart }) {
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container">
      <h2 className="my-4" style={{ paddingTop: "70px" }}>
        Shopping Cart
      </h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center"
          >
            <img
              src={item.images}
              alt={item.name}
              className="img-thumbnail mr-3"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="flex-grow-1">
              <h5>{item.name}</h5>
              <p>
                {item.quantity} x ${item.price}
              </p>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="btn btn-danger btn-sm"
              style={{ width: "100px", marginRight: "50px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h5>Total Quantity: {totalQuantity}</h5>
        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
      </div>
      <button
        className="btn btn-success btn-xs"
        style={{ marginTop: "10px", width: "200px" }}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
