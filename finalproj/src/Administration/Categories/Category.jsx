import React, { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";
const Category = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const [updatetitle, setUpdateTitle] = useState({ title: data.title });
  const deleteCategory = async () => {
    await deleteDoc(doc(db, "Categories", data.id));
  };
  const updateCategore = async () => {
    await updateDoc(doc(db, "Categories", data.id), updatetitle);
    setEdit(false);
  };
  return (
    <div key={data.id} style={{ border: "2px solid black" }}>
      {edit ? (
        <>
          <input
            type="text"
            onChange={(e) =>
              setUpdateTitle({ ...updatetitle, title: e.target.value })
            }
            defaultValue={updatetitle.title}
          />
          <button onClick={updateCategore}>edit</button>
        </>
      ) : (
        <>
          {updatetitle.title}
          <button onClick={() => setEdit(!edit)}>Update</button>
          <button onClick={deleteCategory}>Remove</button>
        </>
      )}
    </div>
  );
};
export default Category;
