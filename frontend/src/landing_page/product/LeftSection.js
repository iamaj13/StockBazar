import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL}
          alt=""
          className="img-fluid"
          style={{ maxWidth : "60%", height: "100%"}}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;