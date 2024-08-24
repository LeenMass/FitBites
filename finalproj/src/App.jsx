import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { Admin } from "./Administration/Admin";
import Categories from "./Administration/Categories/Categories";
import Statistics from "./Administration/Statistics";
import Customers from "./Administration/Customers";
import Orders from "./Registered/Orders";
import Account from "./Registered/Account";
import LogOut from "./Registered/LogOut";
import User from "./Registered/User";
import { useEffect } from "react";
import Products from "./Administration/Products";

function App() {
  const lusogin = sessionStorage["id"];
  const status = sessionStorage["status"];

  const navigate = useNavigate();
  useEffect(() => {
    if (lusogin == undefined) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="*" element={<div>u dont have access</div>}></Route>;
      {status == "admin" ? (
        <Route path="/Admin" element={<Admin />}>
          <Route path="Categories" element={<Categories />} />
          <Route path="Products" element={<Products />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Statistics" element={<Statistics />} />{" "}
          <Route path="LogOut" element={<LogOut />} />
        </Route>
      ) : (
        <Route path="/User" element={<User />}>
          <Route path="Orders" element={<Orders />} />
          <Route path="Account" element={<Account />} />
          <Route path="LogOut" element={<LogOut />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
