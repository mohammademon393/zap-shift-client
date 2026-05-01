import { Link } from "react-router";
import errorImg from "../../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="py-5 bg-base-100 flex flex-col justify-center items-center px-6 text-center my-8 rounded-2xl">
      {/* Zap-Shift Styled Icon/Animation Area */}
      <div className="relative mb-5">
        <img src={errorImg} alt="404" className="h-[75%]" />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="loading loading-bounce loading-lg text-secondary"></span>
        </div>
      </div>

      {/* Message Section */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-2">
          Oops! This parcel took a wild shift.
        </h2>
        <p className="text-base-content/70 mb-4">
          Something went wrong, please try again later or contact our support team if the issue persists.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link to="/" className="btn btn-primary px-8 text-black">
            Return Home
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
