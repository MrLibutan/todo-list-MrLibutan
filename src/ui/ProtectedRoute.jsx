import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import FullpageLoader from "./FullpageLoader";

function ProtectedRoute({ children }) {
  const { isPending, isAuthenticated } = useUser();

  if (isPending) return <FullpageLoader />;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
