"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Comentarios de nuestros clientes
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >
          <ReviewCard
            job="Asistente Soporte y Redes"
            name="Patricio Torres"
            image="/images/c1.png"
          />
          <ReviewCard job="test" name="test" image="/images/c2.png" />
          <ReviewCard job="test2" name="test2" image="/images/c1.png" />
          <ReviewCard job="test3" name="test3" image="/images/c2.png" />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
