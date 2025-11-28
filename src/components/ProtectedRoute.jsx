import { Navigate } from "react-router-dom";
import { useApp } from "../Context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useApp();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}