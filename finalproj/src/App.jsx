import {
  redirect,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Products from "./Administration/Products";
import AllProducts from "./Registered/AllProducts";
import GetData from "./GetData";

const App = () => {
  const status = sessionStorage["status"];
  const link = useLocation();

  return (
    <>
      <GetData />
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route
          path="*"
          element={<div>u dont have access {history.back()}</div>}
        ></Route>
        ;
        {status == "Admin" ? (
          <Route path="/Admin" element={<Admin />}>
            <Route path="Categories" element={<Categories />} />
            <Route path="Products" element={<Products />} />
            <Route path="Customers" element={<Customers />} />
            <Route path="Statistics" element={<Statistics />} />{" "}
            <Route path="LogOut" element={<LogOut />} />
          </Route>
        ) : (
          <Route path="/User" element={<User />}>
            <Route path="AllProducts" element={<AllProducts />} />

            <Route path="Orders" element={<Orders />} />
            <Route path="Account" element={<Account />} />
            <Route path="LogOut" element={<LogOut />} />
          </Route>
        )}
      </Routes>
    </>
  );
};

export default App;
