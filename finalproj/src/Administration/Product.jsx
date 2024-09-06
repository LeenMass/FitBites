import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import AddProduct from "./AddProduct";

const Product = ({ data }) => {
  const categories = useSelector((state) => state.usersD.categories);
  const [product, setProduct] = useState(data);
  const [edit, setEdit] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const updateProduct = async () => {
    await updateDoc(doc(db, "Products", product.id), product);
    setEdit(false);
  };
  console.log(product.category);
  return (
    <>
      {edit ? (
        <div
          style={{
            border: "2px solid black",
            display: "flex",
            width: "400px",
            height: "300px",
          }}
        >
          {" "}
          <div
            style={{
              float: "left",
              display: "inherit",
              flexDirection: "column",
            }}
          >
            {" "}
            <strong>Title:</strong>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={product.title}
            />
            <strong>Category:</strong>
            <select
              onChange={handleChange}
              name="category"
              value={product.category}
            >
              {categories.map((category) => {
                return (
                  <option value={category.title} key={category.id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
            <strong>Description:</strong>
            <textarea
              name="description"
              onChange={handleChange}
              value={product.description}
            />
            <button onClick={updateProduct}>Save</button>
          </div>
          <div
            style={{
              float: "right",
              display: "inherit",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <strong>Price:</strong>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
            <strong>Link to pic:</strong>
            <input
              type="text"
              name="img"
              onChange={handleChange}
              value={product.img}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            border: "2px solid black",
          }}
        >
          <strong>Title:</strong>
          <p>{product.title}</p>
          <strong>Category:</strong>
          <p>{product.category}</p>
          <strong>Description:</strong>
          <p>{product.description}</p>
          <strong>Price:</strong>
          <p>{product.price}</p>
          <strong>Link to pic::</strong>
          <p>{product.img}</p>
          <button onClick={() => setEdit(true)}>edit</button>
          <button onClick={() => setAddProduct(true)}>Add New</button>
        </div>
      )}
      {addProduct ? <AddProduct /> : null}
    </>
  );
};

export default Product;
