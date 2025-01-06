import { ReactNode } from "react";
import { useUserContext } from "./hooks/useUserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="user/form" replace />;
  }

  return children;
}
