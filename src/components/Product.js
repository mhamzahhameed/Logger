import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <p>Products</p>
      <hr />
      <Outlet />
    </div>
  );
};

export default Product;
