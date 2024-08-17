import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { Admin } from "./Administration/Admin";
import Categories from "./Administration/Categories/Categories";
import Statistics from "./Administration/Statistics";
import Customers from "./Administration/Customers";
import Products from "./Administration/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Admin" element={<Admin />}>
          <Route path="Categories" element={<Categories />} />
          <Route path="Products" element={<Products />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
