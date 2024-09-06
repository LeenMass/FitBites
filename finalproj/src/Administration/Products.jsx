import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadProducts } from "../usersSlice";
import { query, onSnapshot, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import db from "../firebase";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.usersD.products);

  return (
    <div>
      {products.map((product) => {
        return <Product data={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
