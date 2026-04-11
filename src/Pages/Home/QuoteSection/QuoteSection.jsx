import React from "react";

const QuoteSection = () => {
  return (
    <section className="py-20 bg-base-100 flex justify-center">
      <div className="relative max-w-3xl bg-base-200 rounded-3xl p-10 shadow-lg">
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 h-full w-2 bg-black rounded-l-3xl"></div>

        {/* Quote Icon */}
        <div className="absolute -top-6 left-10 text-6xl text-primary opacity-20">
          “
        </div>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">
          We ensure fast and reliable parcel delivery across the country. Our
          system is designed to provide real-time tracking, secure handling, and
          smooth logistics operations for both individuals and businesses.
        </p>

        {/* Author */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">ZAPSHIFT Team</h4>
          <p className="text-sm text-gray-500">Logistics Platform</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
