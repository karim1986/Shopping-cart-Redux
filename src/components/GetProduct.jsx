import React from "react";
import { useDispatch } from "react-redux";
import data from "../data";

const GetProduct = () => {
  const dispatch = useDispatch();
  const products = data();

  dispatch({ type: "GOT_PRODUCT", payload: products });

  return null;
};

export default GetProduct;
