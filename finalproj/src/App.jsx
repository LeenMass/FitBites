import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
