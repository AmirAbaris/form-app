import { ReactNode, useState } from "react";
import { Address, User, UserContext } from "./UserContext";

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [address, setAddress] = useState<Address | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser, address, setAddress }}>
      {children}
    </UserContext.Provider>
  );
}
