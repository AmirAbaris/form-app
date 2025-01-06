import { UserContext } from "@/context/User-context";
import { useContext } from "react";

export function useUserContext() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("error");
  }

  return userContext;
}
