import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { query, onSnapshot, collection } from "firebase/firestore";
import Category from "./Category";
import AddCategory from "./AddCategory";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    const q = query(collection(db, "categories"));
    onSnapshot(q, (querySnapshot) => {
      setCategories(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => {
        return <Category data={category} key={category.id} />;
      })}
      <AddCategory />
    </div>
  );
};
export default Categories;
