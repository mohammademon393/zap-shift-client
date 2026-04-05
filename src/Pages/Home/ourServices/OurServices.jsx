import React from "react";
import serviceImg from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary rounded-xl my-10  text-white">
      <h2 className="text-3xl font-bold text-center pt-10 ">Our Services</h2>
      <p className="text-gray-300 text-center mt-4 max-w-xl mx-auto">
        We offer a wide range of delivery services to meet all your shipping
        needs.
      </p>

      {/* card parent */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-10 pb-10">
        {/* card 1 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Express & Standard Delivery
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 2 */}
        <div className="bg-primary border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-rose-200">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Nationwide Delivery
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 3 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fulfillment Solution
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 4 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cash on Home Delivery
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 5 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 6 */}
        <div className="bg-rose-100 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
            <img src={serviceImg} alt="Book Parcel" className="w-7" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Parcel Return
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
