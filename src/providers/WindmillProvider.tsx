import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { Windmill } from "../services/windmill-types";
import { fetchWindmillList, deleteWindmill, updateWindMill } from "../services/TechnicalTestService";

interface WindmillProviderProps {
  children: ReactNode;
}

interface WindMillContextType {
  /**
   * Contains windmills data in an array.
   */
  windmills: Windmill[];
  /**
   * Define if the windmills data is still loading.
   */
  loading: boolean;

  /**
   * Function to handle teh update of a windmill by its ID thats provided.
   * @param id - The ID of the windmill to update.
   * @param data - The data form to update with.
   */
  handleUpdateWindmill: (id: number, data: Partial<Windmill>) => Promise<void>;

  /**
   *
   * @param id - The ID of the windmill to delete.
   * Deletes the windmill by the given id  the list.
   */
  handleDeleteWindmill: (id: number) => void;
}

const WindMillContext = createContext<WindMillContextType | undefined>(undefined);

/**
 * Provider for using windmills values
 */
export const WindmillProvider: React.FC<WindmillProviderProps> = ({ children }) => {
  const [windmills, setWindmills] = useState<Windmill[]>([]);
  const [loading, setLoading] = useState(true);

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

  const handleUpdateWindmill = async (id: number, data: Partial<Windmill>) => {
    try {
      setLoading(true);
      await updateWindMill(id, data);
      setWindmills((prev) => prev.map((windmill) => (windmill.id === id ? { ...windmill, ...data } : windmill)));
      console.log(`Updated windmill with ID: ${id}`);
    } catch (error) {
      console.error("Error updating windmill:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWindmill = async (id: number) => {
    try {
      setLoading(true);
      deleteWindmill(id);
      setWindmills((prev) => prev.filter((windmill) => windmill.id !== id));
    } catch (error) {
      console.error(`Error deleting windmill with ID: ${id}, error:`, error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue: WindMillContextType = {
    windmills,
    loading,
    handleUpdateWindmill,
    handleDeleteWindmill,
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
