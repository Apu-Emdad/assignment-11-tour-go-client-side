import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts/Experts";
import Faq from "../FAQ/Faq";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <h3 className="mt-5 text-danger">Frequently Asked Questions</h3>
      <Faq></Faq>
    </div>
  );
};

export default Home;
