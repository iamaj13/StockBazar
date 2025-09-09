import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import { FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

function Hero() {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate(); // ✅ hook for navigation

  useEffect(() => {
    fetch("/graph.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie JSON:", err));
  }, []);

  if (!animationData) return null;

  const goToSignup = () => {
    navigate("/signup"); // ✅ navigate to signup route
  };

  return (
    <div className="container text-center p-0">
      {/* Lottie Animation */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ height: 350, width: "100%" }}
        />
      </div>

      <div className="container p-5 mb-5">
        <div className="row text-center">
          {/* Typing Heading */}
          <h1 className="mb-3 d-flex justify-content-center align-items-center gap-3">
            <ReactTyped
              strings={["Learn with us ", "Trade with us", "Grow with us"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />

            {/* Animated Icons */}
            <span className="icon-animation text-success">
              <FaArrowUp size={40} />
            </span>
            <span className="icon-animation text-danger">
              <FaArrowDown size={40} />
            </span>
            <span className="icon-animation text-primary">
              <FaChartLine size={40} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-4">
            Learn, analyze, and invest wisely with Stock Bazar
          </p>

          {/* Button */}
          <button
            className="p-3 btn btn-primary fs-5 mb-0 mt-4"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={goToSignup} // ✅ navigation on click
          >
            Signup Now
          </button>
        </div>

        {/* Extra CSS */}
        <style>{`
          .icon-animation {
            display: inline-block;
            animation: bounce 2s infinite;
          }

          .icon-animation:nth-child(2) {
            animation-delay: 0.2s;
          }
          .icon-animation:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Hero;
