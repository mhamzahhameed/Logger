import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Product from "../components/Product";
import ProductDetails from "../components/ProductDetails";
import ProductHome from "../components/ProductHome";
import PageNotFound from "../components/PageNotFound";
import {
  HOMEROUTE,
  ABOUTROUTE,
  PRODUCTROUTE,
  PRODUCTHOMEROUTE,
  PRODUCTDETAILSROUTE,
} from "./Route";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path={HOMEROUTE} element={<Home />} />
        <Route path={ABOUTROUTE} element={<About />} />
        <Route path={PRODUCTROUTE} element={<Product />}>
          <Route path={PRODUCTHOMEROUTE} element={<ProductHome />} />
          <Route path={PRODUCTDETAILSROUTE} element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Index;
