import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import db from "../firebase";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  const getUsers = () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot);
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUsername = () => {
    const x = users.map((item) => {
      return {
        id: item.id,
        username: item.username,
        password: item.password,
        status: item.status,
      };
    });
    let m = x.find((e) => e.username === user.username);
    if (m == undefined) {
      alert("no account");
    } else if (m.username == user.username && m.password == user.password) {
      sessionStorage["id"] = m.id;
      if (m.status == "admin") {
        navigate("/Admin");
      } else {
        navigate("/User");
      }
    } else {
      alert("incorrect pass or username");
    }
  };
  return (
    <div>
      <h2>Next Generation E-Commerce</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <strong>User Name</strong>
        <input type="text" name="username" onChange={handleSubmit} />
        <strong>Password</strong>
        <input type="text" name="password" onChange={handleSubmit} />
        <button onClick={getUsername}>Login</button>
        <p>
          New User? <a href="/SignUp">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
