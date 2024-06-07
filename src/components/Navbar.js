import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom">
      <h2 className="navbar-brand">Shopping-Cart</h2>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ml-auto="true"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/" activeClassName="active">
              Products
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/cart" activeClassName="active">
              Cart
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout" activeClassName="active">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
