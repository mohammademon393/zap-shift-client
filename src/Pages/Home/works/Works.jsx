import React from "react";
import bookingImg from "../../../assets/bookingIcon.png";

const Works = () => {
  return (
    <section className="my-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={bookingImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-sm text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e0f5a1] border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-rose-200">
            <img src={bookingImg} alt="Pickup by Rider" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cash On Delivery
          </h3>
          <p className="text-sm text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={bookingImg} alt="In Transit" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Delivery Hub
          </h3>
          <p className="text-sm text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#e0f5a1] border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-rose-200">
            <img src={bookingImg} alt="Delivered" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Booking SME & Corporate
          </h3>
          <p className="text-sm text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
