import React, { useState, useEffect } from "react";
import Table from "../Components/Table";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "../firebase";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
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
  console.log(users);
  const x = users.filter((e) => e.status !== "admin");
  const data = x.map((item) => {
    return {
      id: item.id,
      fullName: item.fname + " " + item.lname,
      joinDate: item.joinDate,
    };
  });
  const columns = [
    { title: "Full Name", dataIndex: "fullName" },
    { title: "Join Date", dataIndex: "joinDate" },
  ];
  return <Table columns={columns} source={data} />;
};
export default Customers;
