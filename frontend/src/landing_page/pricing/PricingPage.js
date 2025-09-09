import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <section className="hero-section">
          <Hero />
        </section>

        <section className="open-account-section py-5">
          <OpenAccount />
        </section>

        <section className="brokerage-section py-5">
          <Brokerage />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PricingPage;
