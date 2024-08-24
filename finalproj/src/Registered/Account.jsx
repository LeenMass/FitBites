import { doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";

const Account = () => {
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);
  const getUserById = () => {
    const q = query(doc(db, "users", sessionStorage["id"]));
    onSnapshot(q, (doc) => {
      setUserData({
        id: doc.id,
        ...doc.data(),
      });
    });
  };
  const updateUserData = async () => {
    await updateDoc(doc(db, "users", sessionStorage["id"]), userData);
    setEdit(false);
  };
  useEffect(() => {
    getUserById();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {edit ? (
        <>
          <strong>First Name</strong>
          <input
            type="text"
            name="fname"
            onChange={(e) =>
              setUserData({ ...userData, fname: e.target.value })
            }
            value={userData.fname}
          />
          <strong>Last Name</strong>
          <input
            type="text"
            name="lname"
            onChange={(e) =>
              setUserData({ ...userData, lname: e.target.value })
            }
            value={userData.lname}
          />
          <strong>User Name</strong>
          <input
            type="text"
            name="username"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            value={userData.username}
          />
          <strong>Password</strong>
          <input
            type="text"
            name="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
          />

          <span>
            {" "}
            <input
              type="checkbox"
              name="show"
              id="show"
              onChange={(e) =>
                setUserData({ ...userData, show: e.target.checked })
              }
              checked={userData.show}
            />
            Allow Others to see my orders
            <button onClick={updateUserData}>save</button>
          </span>
        </>
      ) : (
        <>
          <strong>First Name:</strong>
          <p>{userData.fname}</p>
          <strong>Last Name:</strong>
          <p>{userData.lname}</p>
          <strong>User Name:</strong>
          <p>{userData.username}</p>
          <strong>Password:</strong>
          <p>{userData.password}</p>
          <strong>Allow other see my orders:</strong>
          <input type="checkbox" name="show" checked={userData.show} />
          <button onClick={() => setEdit(true)}>Update</button>
        </>
      )}
    </div>
  );
};

export default Account;
