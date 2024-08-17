import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Admin = () => {
  return (
    <div>
      Hello, Admin
      <Link to="Categories">Categories</Link>
      <Link to="Products">Products</Link>
      <Link to="Customers">Customers</Link>
      <Link to="Statistics">Statistics</Link>
      <Outlet />
    </div>
  );
};
