import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
interface Props {
  children: ReactNode;
}
const ProtectRoute = ({ children }: Props) => {
  const { user } = UserAuth();
  const use = localStorage.getItem("NETFLIX");
  if (!user && !use) {
    return <Navigate to={"nouser"} />;
  }
  return <>{children}</>;
};

export default ProtectRoute;
