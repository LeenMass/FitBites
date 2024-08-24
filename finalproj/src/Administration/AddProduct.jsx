import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";

const AddProduct = () => {
  const categories = useSelector((state) => state.usersD.categories);
  const [newProduct, setNewProduct] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const addNewProduct = async () => {
    await addDoc(collection(db, "products"), newProduct);
  };
  return (
    <div>
      <div>
        <div>
          <strong>Title:</strong>
          <input type="text" name="title" onChange={handleChange} />
          <strong>Category:</strong>
          <select onChange={handleChange} name="category">
            {categories.map((category) => {
              return (
                <option value={category.title} key={category.id}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <strong>Description:</strong>
          <textarea name="description" onChange={handleChange} />
        </div>
        <div>
          <strong>Price:</strong>
          <input type="text" name="price" onChange={handleChange} />
          <strong>Link to pic:</strong>
          <input type="text" name="img" onChange={handleChange} />
        </div>
      </div>
      <button onClick={addNewProduct}>Add new Product</button>
    </div>
  );
};

export default AddProduct;
