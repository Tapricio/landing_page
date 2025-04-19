import Logo from "@/constant/Logo";
import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            {/* LOGO */}
            <Logo />
            {/* Description */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              recusandae vitae, expedita dignissimos exercitationem eius
              pariatur nostrum doloremque dicta obcaecati!
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800">Nosotros</h3>
            <ul className="capitalize mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Soporte central</li>
              <li>Soporte personalizado</li>
              <li>Sobre nosotros</li>
              <li>Derechos de autor</li>
              <li>Ubicación</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800">Información</h3>
            <ul className="capitalize mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Politicas de devolución</li>
              <li>Privacidad</li>
              <li>Terminos y condiciones</li>
              <li>Mapa del sitio</li>
              <li>Reclamos</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800">Contacto</h3>
            <ul className="capitalize mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2" />
                Santiago, Chile
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                +569 1234 5678
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />7 dias - 24 horas
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                patriciotcisternas95@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 px-3 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm ">
        <p className="text-center md:text-left">
          Copyright © 2025 Patricio Torres. Todos los derechos reservados
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social:</span>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
