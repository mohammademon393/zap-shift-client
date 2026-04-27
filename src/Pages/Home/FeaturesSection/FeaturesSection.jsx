import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    icon: img1, // replace with your image path
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: img2, 
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: img1,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-base-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-16 border-l-2 border-dashed border-gray-300"></div>

            {/* Content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-back mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
