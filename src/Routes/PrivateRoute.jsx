import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem("username");
  const token = localStorage.getItem("authToken");
  if (user && token) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a React node
};

export default PrivateRoute;
