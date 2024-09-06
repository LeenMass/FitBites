import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const covertDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let current = day + "/" + month + "/" + year;
    return current;
  };
  let z = covertDate();
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    show: "",
    status: "user",
    joinDate: z,
  });

  const addingUser = async () => {
    await addDoc(collection(db, "users"), newUser);
    navigate("/");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>New User Registration</h2>
      <strong>First Name</strong>
      <input
        type="text"
        name="fname"
        onChange={(e) => setNewUser({ ...newUser, fname: e.target.value })}
      />
      <strong>Last Name</strong>
      <input
        type="text"
        name="lname"
        onChange={(e) => setNewUser({ ...newUser, lname: e.target.value })}
      />
      <strong>User Name</strong>
      <input
        type="text"
        name="username"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <strong>Password</strong>
      <input
        type="text"
        name="password"
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />

      <span>
        {" "}
        <input
          type="checkbox"
          name="show"
          id="show"
          onChange={(e) => setNewUser({ ...newUser, show: e.target.checked })}
        />
        Allow Others to see my orders
      </span>

      <button onClick={addingUser}>Create</button>
    </div>
  );
};

export default SignUp;
