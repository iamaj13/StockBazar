import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App.js";
import Funds from "./Funds.js";
import Holding from "./Holding.js";

import Order from "./Order.js";
import Position from "./Position";
import Summary from "./Summary.js";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext.js";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;