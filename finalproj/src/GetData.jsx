import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "./firebase";
import { loadCategories, loadProducts } from "./usersSlice";

const GetData = () => {
  const dispatch = useDispatch();

  const getAllProducrs = () => {
    const q = query(collection(db, "Products"));
    onSnapshot(q, (querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(loadProducts(products));
    });
  };
  const getAllCategories = () => {
    const q = query(collection(db, "Categories"));
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(loadCategories(data));
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  useEffect(() => {
    getAllProducrs();
  }, []);
  return <div></div>;
};

export default GetData;
