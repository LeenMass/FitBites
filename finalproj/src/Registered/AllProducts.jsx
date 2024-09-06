import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Filter from "./Filter";

const AllProducts = () => {
  const products = useSelector((state) => state.usersD.products);
  const [filter, setFilter] = useState({
    price: 0,
    category: "All",
    title: "",
  });
  const handle = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };
  const clear = () => {
    setFilter({ ...filter, price: 0, category: "All", title: "" });
  };

  useEffect(() => {}, [products]);
  return (
    <div>
      <Filter filter={handle} clear={clear} price={filter.price} />

      {products.length > 0 ? (
        products

          .filter(
            (product) =>
              filter.category === "All" || filter.category === product.category
          )
          .filter(
            (product) => filter.price === 0 || product.price == filter.price
          )

          .filter((product) =>
            product.title.toLowerCase().match(filter.title.toLowerCase())
          )
          .map((product) => {
            return <Product data={product} key={product.id} />;
          })
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};
export default AllProducts;
