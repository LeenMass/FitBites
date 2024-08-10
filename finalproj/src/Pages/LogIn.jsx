import React from "react";

const LogIn = () => {
  return (
    <div>
      <h2>Next Generation E-Commerce</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <strong>User Name</strong>
        <input type="text" name="username" />
        <strong>Password</strong>
        <input type="text" name="password" />
        <button>Login</button>
        <p>
          New User? <a href="/SignUp">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
