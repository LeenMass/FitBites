import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase";
const Category = ({ data }) => {
  const deleteCategory = async () => {
    await deleteDoc(doc(db, "categories", data.id));
  };

  return (
    <div key={data.id} style={{ border: "2px solid black" }}>
      {data.title}
      <button>Update</button>
      <button onClick={deleteCategory}>Remove</button>
    </div>
  );
};
export default Category;
