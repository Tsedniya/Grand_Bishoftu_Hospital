// components/AdminPrivateRoute.jsx
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  // check if the admin is logged in
  const admin = JSON.parse(localStorage.getItem("admin")); // or check from your global state

  // if no admin, redirect to login page
  if (!admin) {
    return <Navigate to="/admin/auth" replace />;
  }

  // if admin is logged in, show the protected page
  return children;
};

export default AdminPrivateRoute;