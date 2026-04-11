import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const { userName, ratings, review: comment, user_photoURL, date } = review;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="flex justify-center items-center p-4">
      <div className="card max-w-md bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition duration-300">
        <div className="card-body">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-3xl text-primary" />

          {/* Review Text */}
          <p className="text-sm md:text-base mt-2">
            {comment}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${
                  i < Math.round(ratings) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-base-content/60">{ratings}</span>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-base-300 my-4"></div>

          {/* User Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src={user_photoURL}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover border"
            />

            {/* Name & Date */}
            <div>
              <h3 className="font-semibold text-base-content">{userName}</h3>
              <p className="text-xs text-base-content/60">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
