import React from "react";
import WrapperContainer from "./WrapperContainer";
import { ChevronLeftIcon, ChevronUpSquareIcon, CircleCheckBig, CodeSquare } from "lucide-react";
import { Link } from "react-router-dom";

const PurchaseConfirmation = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col justify-center items-center font-clash-regular space-y-3 w-full h-[500px]  ">
        <div className="flex items-center gap-5 ">
          <CircleCheckBig className="inline-block text-green-500 w-10 h-10 " />
          <span className="text-2xl font-clash-semibold  ">
            Purchase Confirmed
          </span>
        </div>
        <p className="text-slate-700">
          Thank you for your purchase. Your course access is now available.
        </p>
        <Link to={'/dashboard/purchase'} className="text-[14px] flex gap-3 items-center button-click  "> <ChevronLeftIcon />  Go Back </Link>
      </div>
    </WrapperContainer>
  );
};

export default PurchaseConfirmation;
