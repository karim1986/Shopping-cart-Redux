import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { products } = useSelector((state) => state.data);
  const totalCounter = products.filter((product) => product.value > 0).length;
  return (
    <div>
      <ul className="navbar navbar-dark bg-dark justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text text-light" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text text-light" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text text-light " to="/shop">
            Shop
            <span className="badge bg-warning text-dark rounded-pill fs-6 text m-2 ">
              {"  "} {totalCounter}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
