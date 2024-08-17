import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"; //creating store
import usersReducer from "./usersSlice.js";
const store = configureStore({
  reducer: {
    usersD: usersReducer,
  },
}); // in the object we put all the reducers
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
