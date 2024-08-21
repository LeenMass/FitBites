import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Admin = () => {
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
