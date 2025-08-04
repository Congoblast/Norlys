import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { Windmill } from "../services/windmill-types";
import { fetchWindmillList } from "../services/TechnicalTestService";

interface WindmillProviderProps {
  children: ReactNode;
}

interface WindMillContextType {
  /**
   * Contains windmills data in an array
   */
  windmills: Windmill[];
  /**
   * Define if the windmills data is still loading
   */
  loading: boolean;
}

const WindMillContext = createContext<WindMillContextType | undefined>(undefined);

export const WindmillProvider: React.FC<WindmillProviderProps> = ({ children }) => {
  const [windmills, setWindmills] = useState<Windmill[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWindmills = async () => {
      try {
        const windMillsData = await fetchWindmillList();
        setWindmills(windMillsData);
      } catch (error) {
        console.error("Error fetching windmills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWindmills();
  }, []);

  const contextValue: WindMillContextType = {
    windmills,
    loading,
  };

  return <WindMillContext.Provider value={contextValue}>{children}</WindMillContext.Provider>;
};

export const useWindmillContext = () => {
  const context = React.useContext(WindMillContext);
  if (!context) {
    throw new Error("useWindmillContext must be used within a WindmillProvider");
  }
  return context;
};
