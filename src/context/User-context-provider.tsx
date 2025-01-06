import { ReactNode, useState } from "react";
import { Address, User, UserContext } from "./User-context";

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const [step, setStep] = useState<number>(1);

  return (
    <UserContext.Provider
      value={{ user, setUser, address, setAddress, step, setStep }}
    >
      {children}
    </UserContext.Provider>
  );
}
