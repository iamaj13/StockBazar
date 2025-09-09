import React from "react";
import {useNavigate} from "react-router-dom";

function OpenAccount() {

  const navigate = useNavigate();

  const goToSignUp = ()=>{
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Stock Bazar account</h1>
        <p>
          Open Your Account, Open Your Future
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-0 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={goToSignUp}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

