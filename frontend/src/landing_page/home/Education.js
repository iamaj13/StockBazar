import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/Education.png" alt="Education" style={{ width: "65%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Stock Bazar is a modern and user-friendly stock market platform
            designed to make investing simple, transparent, and accessible for
            everyone. The website offers: <br />{" "}
            <ul>
              {" "}
              <li>
                Real-time market updates with live stock prices and charts.
              </li>
              <li>
                Educational resources that explain stock market basics, trading
                strategies, and investment tips for beginners and advanced
                users.
              </li>
              <li>
                Research & analysis tools like fundamental and technical
                analysis guides.
              </li>
              <li>
                Blogs & insights covering the latest trends, financial news, and
                expert opinions.
              </li>
              <li>
                Community engagement through FAQs, quizzes, and learning
                materials to help users grow as confident investors.
              </li>
            </ul>{" "}
          </p>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/about" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
