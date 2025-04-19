import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image content */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/a.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Seguimiento y análisis de la audiencia
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Poderosas herramientas de análisis que te ponen en control y son
            totalmente personalizables.
          </h2>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            necessitatibus dolores nostrum mollitia minima, quae id sit commodi
            ab fuga. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quisquam, architecto!
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Asistencia via chat
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Características ilimitadas
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Respuesta de manera inmediata
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 hover:text-white">
            Ver más &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;
