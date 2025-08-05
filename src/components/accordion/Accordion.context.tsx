import { createContext, useContext } from "react";

interface AccordionContextType {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AccordionContext = createContext<AccordionContextType>({
  isExpanded: false,
  setIsExpanded: () => {},
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within the AccordionProvider");
  }
  return context;
};
