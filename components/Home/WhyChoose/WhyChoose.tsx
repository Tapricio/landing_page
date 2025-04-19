import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        ¿Por qué elegirnos?
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {/* Cards */}
        <div>
          <WhyChooseCard
            image="/images/i1.png"
            title="Crea una cuenta gratis"
            linkText="Comienza a ganar"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i2.png"
            title="Estadisticas de usuario"
            linkText="Ingresa a tu cuenta"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i3.png"
            title="Seguros y confiables"
            linkText="Descarga la App"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i4.png"
            title="Rapido soporte al usuario "
            linkText="Ver más"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
