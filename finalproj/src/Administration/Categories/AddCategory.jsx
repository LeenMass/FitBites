import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase";

const AddCategory = () => {
  const [category, setCategore] = useState({ title: "" });

  const addCategory = async () => {
    await addDoc(collection(db, "categories"), category);
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
