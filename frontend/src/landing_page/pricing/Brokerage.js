import React from "react";

function Brokerage() {
  return (
    <section
      style={{
        width: "100%",
        margin: "0",
        padding: "60px 40px", // more left-right padding for spacing
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #ddd",
        textAlign: "left", // whole section aligns left
      }}
    >
      <a href="#" className="text-decoration-none text-dark">
        <h2 className="fs-4 mb-4" align= "center">Brokerage calculator</h2>
      </a>
      <ul
        style={{
          maxWidth: "1000px", // keeps it readable
          margin: "0",
          padding: "0 20px",
          lineHeight: "2",
          fontSize: "16px", // bigger text
          listStyleType: "disc",
        }}
        className="text-dark"
      >
        <li>
          Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
          per order.
        </li>
        <li>Digital contract notes will be sent via e-mail.</li>
        <li>
          Physical copies of contract notes, if required, shall be charged ₹20
          per contract note. Courier charges apply.
        </li>
        <li>
          For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity
          (whichever is lower).
        </li>
        <li>
          For NRI account (PIS), 0.5% or ₹200 per executed order for equity
          (whichever is lower).
        </li>
        <li>
          If the account is in debit balance, any order placed will be charged
          ₹40 per executed order instead of ₹20 per executed order.
        </li>
      </ul>
    </section>
  );
}

export default Brokerage;
