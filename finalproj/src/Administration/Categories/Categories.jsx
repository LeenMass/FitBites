import React from "react";
import Category from "./Category";
import AddCategory from "./AddCategory";
import { useSelector } from "react-redux";

const Categories = () => {
  const categoriesData = useSelector((state) => state.usersD.categories);

  return (
    <div>
      <h2>Categories</h2>
      {categoriesData.map((category) => {
        return <Category data={category} key={category.id} />;
      })}
      <AddCategory />
    </div>
  );
};
export default Categories;
