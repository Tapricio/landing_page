import React from "react";
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaInfinity,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      text: "+50 diseños únicos",
    },
    {
      icon: <FaLaptop className="text-blue-500" />,
      text: "Distintos templates",
    },
    {
      icon: <FaMobileAlt className="text-yellow-500" />,
      text: "Diseños rápidos de teléfono",
    },
    {
      icon: <FaDesktop className="text-purple-500" />,
      text: "Totalmente adaptable",
    },
    {
      icon: <FaCog className="text-teal-500" />,
      text: "Características adaptables",
    },
    {
      icon: <FaHeadset className="text-green-500" />,
      text: "Soporte humano",
    },
    {
      icon: <FaInfinity className="text-pink-500" />,
      text: "Actualizaciones de por vida",
    },
    {
      icon: <FaBook className="text-indigo-500" />,
      text: "Documentación completa",
    },
    {
      icon: <FaShield className="text-orange-500" />,
      text: "Seguridad mejorada",
    },
  ];

  return (
    <div className="bg-pink-50 pt-20 pb-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          todo lo que siempre has necesitado
        </h1>
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              data-aos="flip-right"
              data-aos-delay={`${index * 50}`}
              key={index}
              className="flex items-center justify-left p-4 bg-white rounded-lg shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                <span>{feature.icon}</span>
              </div>
              <span className="font-semibold">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
