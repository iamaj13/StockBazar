import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import ProductPage from "./landing_page/product/ProductPage"
import PricingPage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/aboutpage";
import SupportPage from "./landing_page/support/SupportPage";
import SignUp from "./landing_page/signup/Sign_up";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/signup" element={<SignUp/>} />
  <Route path="/about" element={<AboutPage/>} />
  <Route path="/product" element={<ProductPage/>} />
  <Route path="/pricing" element={<PricingPage/>} />
  <Route path="/support" element={<SupportPage/>} />
</Routes>
</BrowserRouter>
);