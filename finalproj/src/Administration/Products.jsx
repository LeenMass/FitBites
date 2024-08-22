import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const ca = useSelector((state) => state.usersD.categories);
  console.log(ca);
  return <div>Products</div>;
};

export default Products;
