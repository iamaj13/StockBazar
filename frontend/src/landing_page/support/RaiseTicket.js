import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 justify-content-center text-center">
        <h1 className="fs-2 mb-5" align ="center">
          To create a ticket, select a relevant topic
        </h1>

        {/* Ticket Block */}
        <div className="col-md-4 p-4">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Stock Bazar
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
        </div>

        {/* Duplicate same block for other tickets */}
        <div className="col-md-4 p-4">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Equity Trading
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Futures & Options
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Commodity Trading
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Currency Trading
          </a>
        </div>

        {/* You can keep adding more ticket blocks */}
      </div>
    </div>
  );
}

export default CreateTicket;
