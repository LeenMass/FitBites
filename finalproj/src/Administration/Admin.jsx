import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { query, onSnapshot, collection } from "firebase/firestore";
import { loadCategories } from "../usersSlice";
import { useDispatch } from "react-redux";
import db from "../firebase";

export const Admin = () => {
  const dispatch = useDispatch();
  const getAllCategories = () => {
    const q = query(collection(db, "categories"));
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
  return (
    <div>
      <h2>Hello, Admin</h2>

      <Link to="Categories" style={{ padding: "10px" }}>
        Categories
      </Link>
      <Link to="Products" style={{ padding: "10px" }}>
        Products
      </Link>
      <Link to="Customers" style={{ padding: "10px" }}>
        Customers
      </Link>
      <Link to="Statistics" style={{ padding: "10px" }}>
        Statistics
      </Link>
      <Outlet />
      <Link to="LogOut" style={{ padding: "10px" }}>
        LogOut
      </Link>
    </div>
  );
};
