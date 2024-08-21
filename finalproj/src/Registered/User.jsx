import React from "react";
import { Link, Outlet } from "react-router-dom";
const User = () => {
  return (
    <div>
      <h2>Welcome User</h2>
      <Link to="Products" style={{ padding: "10px" }}>
        Products
      </Link>
      <Link to="Orders" style={{ padding: "10px" }}>
        Orders
      </Link>
      <Link to="Account" style={{ padding: "10px" }}>
        Account
      </Link>

      <Outlet />
      <Link to="LogOut" style={{ padding: "10px" }}>
        LogOut
      </Link>
    </div>
  );
};

export default User;
