import React from "react";
import "./Checkout.css";

function Checkout({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="container align-items-center">
      <h2 className="" style={{ marginTop: "100px" }}>
        Order Summary
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
              style={{ width: "80px", marginRight: "10px", height: "70px" }}
            />
            <div>
              <p>
                {item.name} - {item.quantity} x ${item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
        <button className="btn btn-success">Confirm Order</button>
      </div>
    </div>
  );
}

export default Checkout;
