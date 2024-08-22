import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase";
import { useDispatch } from "react-redux";
import { addcategory } from "../../usersSlice";
const AddCategory = () => {
  const [category, setCategore] = useState({ title: "" });
  const dispatch = useDispatch();

  const addCategory = async () => {
    await addDoc(collection(db, "categories"), category);
    dispatch(addcategory(category));
  };
  return (
    <>
      {" "}
      <input
        type="text"
        name="category"
        onChange={(e) => setCategore({ ...category, title: e.target.value })}
      />
      <button onClick={addCategory}>Add</button>
    </>
  );
};
export default AddCategory;
