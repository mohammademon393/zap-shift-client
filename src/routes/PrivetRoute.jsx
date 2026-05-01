import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

   
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <span className="loading loading-infinite loading-xl"></span>
  //     </div>
  //   );
  // }

  if (!user) {
    return <Navigate to="/login" state={ location.pathname }></Navigate>;
  }

  return children;
};
export default PrivetRoute;
