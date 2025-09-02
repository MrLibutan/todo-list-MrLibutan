import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import FullpageLoader from "./FullpageLoader";

function PublicRoute({ children }) {
  const { isPending, isAuthenticated } = useUser();

  if (isPending) return <FullpageLoader />;

  if (isAuthenticated) return <Navigate to="/home" replace />;

  return children;
}

export default PublicRoute;
