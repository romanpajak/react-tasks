import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Details from "./pages/Details";
import UserPage from "./pages/UserPage";
import { router } from "./router/router";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index element={<Home />} />
      <Route path={router.home} element={<Home />} />
      <Route path={router.about} element={<About />} />
      <Route path={router.footer} element={<Footer />} />
      <Route path={router.details} element={<Details />} />
      <Route path="details/user/:userId" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
