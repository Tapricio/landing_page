import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-24 mb-20 bg-black">
      <div className="text-center px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Explora las características premium
        </h2>
        <p className="text-gray-400 mb-8">
          Dinos tu correo y te enviaremos una invitación directamente
        </p>
        <button className="py-3 px-8 rounded-full text-sm md:text-lg mb-4 defaultClickeableButton">
          Comenzar prueba gratis de 14 dias
        </button>
        <p className="text-gray-400">No se requiere medio de pago</p>
      </div>
    </div>
  );
};

export default Offer;
