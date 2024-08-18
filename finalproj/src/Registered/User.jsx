import React from "react";

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
      <Link to="LogOut" style={{ padding: "10px" }}>
        LogOut
      </Link>
      <Outlet />
    </div>
  );
};

export default User;
