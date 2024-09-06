import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage["loggedin"] == null) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h2>Welcome User</h2>
      <Link to="AllProducts" style={{ padding: "10px" }}>
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
