import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
           
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>

        </div>
      );
}

export default NavBar