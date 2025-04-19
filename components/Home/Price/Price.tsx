import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  const planPersonal = [
    "Colección ilimitada",
    "Acciones básicas y simples",
    "Pagos sencillos",
    "Flujos ilimitados y soporte",
    "Actualizaciones de por vida",
  ];
  const planNegocios = [
    "Todo plan personal",
    "Control total de tu negocio",
    "Pagos automatizados",
    "Soporte especializado en tu área",
    "Apoyo en tu crecimiento",
  ];

  return (
    <div className="pt-16 pb-16 bg-[#edfbff]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Conoce nuestros planes de pago
      </h2>
      <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center">
          <PriceCard
            price={15000}
            plan={"Plan personal"}
            planDescription={planPersonal}
          />
        </div>

        <div data-aos="fade-down" data-aos-anchor-placement="top-center">
          <PriceCard
            price={45000}
            plan={"Plan negocios"}
            planDescription={planNegocios}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
