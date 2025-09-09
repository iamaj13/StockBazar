import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 text-center" id="supportWrapper">
        <h1>Support Portal</h1>
        {/* <a href="">Track Tickets</a> */}
        <button
          className="p-3 btn btn-primary fs-5 mb-0 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Track Ticket
        </button>
      </div>

      {/* Row with two equal columns */}
      <div className="row p-5 m-3">
        {/* Left Side - Search */}
        <div className="col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control my-3"
          />
          <div className="d-flex flex-column gap-2">
            <ul>
              <li> How to open an account</li>
              <li> Charges at Stock Bazar </li>
              <li> Settlement holidays</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Featured */}
        <div className="col-md-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" className="no-link-style">
                Current Takeovers and Delisting
              </a>
            </li>
            <li>
              <a href="" className="no-link-style">
                F&O changes
              </a>
            </li>
            <li>
              <a href="" className="no-link-style">
                SEBI guidelines update
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
