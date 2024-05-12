import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex min-h-screen min-w-screen justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
