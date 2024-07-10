import { createContext, useContext } from "react";

interface ComponentsProps {
  changeLanguage: string;
  setChangeLanguage: (changeLanguage: string) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
