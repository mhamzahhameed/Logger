import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='product'>Poduct</Link>
        </li>
        <li>
          <Link to='/product/mobile'>Mobile</Link>
        </li>{" "}
        <li>
          <Link to='/product/handdsfree'>HandsFree</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
