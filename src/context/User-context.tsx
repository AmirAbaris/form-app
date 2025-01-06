import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export interface Address {
  firstAddress: string;
  secondAddress: string;
  city: string;
  postalCode: string;
}

export interface UserContextType {
  user: User | undefined;
  address?: Address | undefined;
  step: number;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setAddress: Dispatch<SetStateAction<Address | undefined>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);