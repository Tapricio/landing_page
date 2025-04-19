import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  description: string;
};
const PriceDescriptionCard = ({ description }: Props) => {
  return (
    <div className="text-center mb-4 flex items-center space-x-3">
      <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
        <FaCheck className="text-green-500" />
      </div>
      <p className="text-sm font-semibold text-grey-700">{description}</p>
    </div>
  );
};

export default PriceDescriptionCard;
