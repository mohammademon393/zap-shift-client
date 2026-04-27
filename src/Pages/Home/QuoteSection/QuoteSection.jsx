import React from "react";
import img1 from "../../../assets/location-merchant.png";

const QuoteSection = () => {
  return (
    <section className="bg-secondary flex justify-center max-w-full h-[500px] rounded-2xl">
      <img src={img1} alt="Location Merchant" className="w-[50%] h-[50%] object-cover rounded-2xl" />

    </section>
  );
};

export default QuoteSection;
