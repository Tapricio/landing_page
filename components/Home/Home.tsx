"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Price from "./Price/Price";
import Offer from "./Offer/Offer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log("Tamaño actual:", window.innerWidth, "x", window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // llama una vez al cargar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
      <Review />
      <Price />
      <Offer />
    </div>
  );
};

export default Home;
