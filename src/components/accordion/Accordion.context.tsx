import { createContext, useContext } from "react";

export interface AccordionContextProps extends React.PropsWithChildren {
  /**
   * Boolean if the accordion should be expanded or not
   */
  isExpanded: boolean;
  /**
   * Callback for the state to change if the accordion is expanded or not
   */
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AccordionContextValues {
  /**
   * Default value if the accordion is extended
   */
  isExpanded: true;
  /**
   * Empty function declared for setIsExpanded
   */
  setIsExpanded: () => {};
}

export const AccordionContext = createContext({} as AccordionContextProps);

/**
 * Provider for using an accordions values
 */
export const AccordionProvider = (props: AccordionContextProps) => {
  const { children, isExpanded, setIsExpanded } = props;

  return <AccordionContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</AccordionContext.Provider>;
};

export const useAccordion = () => useContext(AccordionContext);
