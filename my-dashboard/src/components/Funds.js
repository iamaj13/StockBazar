import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-container">
      {/* Top Section */}
      <div className="funds-header">
        <p className="funds-subtitle">Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-actions">
          <Link className="btn btn-green">Add Funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        {/* Equity Card */}
        <div className="col card">
          <h3 className="card-title">Equity</h3>
          <div className="card-body">
            <div className="data">
              <span>Available Margin</span>
              <span className="imp colored">₹4,043.10</span>
            </div>
            <div className="data">
              <span>Used Margin</span>
              <span className="imp">₹3,757.30</span>
            </div>
            <div className="data">
              <span>Available Cash</span>
              <span className="imp">₹4,043.10</span>
            </div>

            <hr />

            <div className="data">
              <span>Opening Balance</span>
              <span>₹4,043.10</span>
            </div>
            <div className="data">
              <span>Closing Balance</span>
              <span>₹3,736.40</span>
            </div>
            <div className="data">
              <span>Payin</span>
              <span>₹4,064.00</span>
            </div>
            <div className="data">
              <span>SPAN</span>
              <span>₹0.00</span>
            </div>
            <div className="data">
              <span>Delivery Margin</span>
              <span>₹0.00</span>
            </div>
            <div className="data">
              <span>Exposure</span>
              <span>₹0.00</span>
            </div>
            <div className="data">
              <span>Options Premium</span>
              <span>₹0.00</span>
            </div>

            <hr />

            <div className="data">
              <span>Collateral (Liquid Funds)</span>
              <span>₹0.00</span>
            </div>
            <div className="data">
              <span>Collateral (Equity)</span>
              <span>₹0.00</span>
            </div>
            <div className="data">
              <span>Total Collateral</span>
              <span>₹0.00</span>
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div className="col card">
          <h3 className="card-title">Commodity</h3>
          <div className="card-body empty-card">
            <p><strong> You don't have a commodity account </strong></p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
