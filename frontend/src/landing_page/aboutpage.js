import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        {/* Hero / Headline */}
        <div className="row p-5 mt-5 mb-5">
          <h1 className="fs-2 text-center animated-headline">
            Empowering Your Financial Future
          </h1>
        </div>

        {/* About Section */}
        <div
          className="row p-1 mt-1 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-12 p-4">
            <h2>
              <strong>About Stock Bazar</strong>
            </h2>
            <h5>Empowering Traders, Simplifying Investing</h5>
            <p>
              At Stock Bazar, our mission is simple: to make stock market
              investing accessible, transparent, and profitable for everyone.
              Whether you’re a first-time investor or an experienced trader, we
              provide the tools, insights, and support you need to make smarter
              decisions and grow your wealth confidently.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="row p-1 mt-1 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em", backgroundColor: "#f8f9fa", borderRadius: "8px" }}
        >
          <div className="col-12 p-4">
            <h2>
              <strong>Why Choose Us</strong>
            </h2>
            <ul>
              <li>Trusted by thousands of traders across India</li>
              <li>Cutting-edge technology designed for speed and efficiency</li>
              <li>Committed to empowering investors with knowledge and transparency</li>
            </ul>
          </div>
        </div>

        {/* What We Do Section */}
        <div
          className="row p-1 mt-1 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-12">
            <h2>
              <strong>What We Do:</strong>
            </h2>
            <ul>
              <li>
                <strong>Innovative Trading Platform:</strong> Trade stocks, ETFs,
                and derivatives seamlessly with our intuitive, fast, and reliable
                platform.
              </li>
              <li>
                <strong>Real-Time Market Insights:</strong> Stay ahead with live
                market data, expert analysis, and actionable insights.
              </li>
              <li>
                <strong>Educational Resources:</strong> Learn the art and science
                of investing with our guides, tutorials, and community forums.
              </li>
              <li>
                <strong>Low-Cost Brokerage:</strong> Enjoy competitive pricing
                with zero hidden fees, ensuring you keep more of your profits.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />

      {/* Inline CSS for animation */}
      <style>{`
        .animated-headline {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideIn 1.5s forwards;
        }

        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default AboutPage;
