import React from "react";
import PriceDescriptionCard from "./PriceDescriptionCard";

type Props = {
  price: number;
  plan: string;
  planDescription: Array<string>;
};

const PriceCard = ({ price, plan, planDescription }: Props) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg">
      <p className="mt-8 text-xl font-semibold text-center text-blue-600 capitalize">
        {plan}
      </p>
      <div className="font-medium text-3xl mt-4 text-center">
        $
        <span className="text-5xl font-bold">
          {price.toLocaleString("es-CL")}
        </span>
        <span className="text-lg md:text-2xl">/Mensual</span>
      </div>
      <p className="mt-2 text-gray-500 text-center">Por usuario</p>
      <div className="mt-2">
        {planDescription.map((plan, index) => {
          return <PriceDescriptionCard description={plan} key={index} />;
        })}
      </div>
      <div className="mt-8">
        <button className="block w-full p-4 defaultClickeableButton">
          Comienza la prueba de 14 dias
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
