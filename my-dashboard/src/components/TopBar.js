import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Left: Logo / Brand */}
      <div className="brand">
        <img src="icon2.png" alt="Stock Bazar Logo" className="brand-logo" />
      </div>

      {/* Center: Indices */}
      <div className="indices-container">
        <div className="index-card sensex">
          <p className="index">NIFTY 50</p>
          <p className="index-points">24,751.55</p>
          <p className="percent negative">+0.32%</p>
        </div>
      </div>

      {/* Right: Profile & Menu */}
      <div className="menu-wrapper">
        {/* Instead of full navbar, only profile/menu button */}
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
