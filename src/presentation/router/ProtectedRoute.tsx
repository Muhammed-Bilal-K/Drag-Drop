import { PropsWithChildren, useEffect } from "react";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token") as string;

  useEffect(() => {
    if (!token) {
      window.location.replace("/signIn");
      return;
    }
    
  }, [token]);

  return children;
}
