import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full mt-[13vh] md:mt-[15vh] xl:mt-[10vh]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-[75%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <div>
            {/* Top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <button className="px-3 py-1 md:px-5 md:py-1 rounded-full defaultClickeableButton">
                Noticias
              </button>
              <p className="text-xs sm:text-sm">
                Hemos actualizado nuestros términos y condiciones
              </p>
            </div>
            {/* Heading */}
            <h1
              /* data-aos="fade-down" */
              className="text-2xl sm:text-4xl md:text-5xl mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              El compañero de trabajo perfecto para tus necesidades!
            </h1>
            {/* Description */}
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              doloribus accusamus natus ducimus consequuntur adipisci
              dignissimos dolorem deserunt libero earum.
            </p>
            {/* Play store and app image */}
            <div className="flex mt-8 mb-8 items-center space-x-4">
              <Image
                src="/images/gp.png"
                width={150}
                height={150}
                alt="Google playstore"
                className="object-contain"
              />
              <Image
                src="/images/as.png"
                width={150}
                height={150}
                alt="App store"
                className="object-contain"
              />
            </div>
          </div>
          {/* Image content */}
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="hidden lg:block"
          >
            <Image src="/images/hero.png" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
