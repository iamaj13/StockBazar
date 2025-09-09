import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
    <Navbar/>
      <Hero />
      <LeftSection
        imageURL="/images/stockk.png"
        productName="Stocks"
        productDesription="Join Stock Bazar to start your journey in smart investing. Explore stocks with us, grow your wealth confidently, and secure your financial future with expert guidance, transparency, and trusted market insights."
      />
      <RightSection
        imageURL="/images/Mutual.png"
        productName="Mutual Funds"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <LeftSection
        imageURL="/images/ipo.png"
        productName="IPO"
        productDesription="Be part of tomorrow’s market leaders today. Invest in IPOs with Stock Bazar, unlock exciting opportunities, and grow with new companies through expert analysis, clear guidance, and a trusted investment experience."
      />
      <RightSection
        imageURL="/images/bonds.png"
        productName="Bonds"
        productDesription="Secure stable returns and steady income with bonds at Stock Bazar. Balance your portfolio, protect wealth, and enjoy reliable financial growth with expert support, complete transparency, and a trusted investment partner."
      />
      <Footer/>
    </>
  );
}

export default ProductPage;