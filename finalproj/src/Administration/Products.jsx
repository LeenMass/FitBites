import { useSelector } from "react-redux";

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
