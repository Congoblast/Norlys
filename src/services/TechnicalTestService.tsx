import type { Windmill } from "./windmill-types";

export const localWindmillUrl = import.meta.env.VITE_WINDMILL_API_URL;

export const fetchWindmillList = async () => {
  const url = `/api/asset`;

  try {
    const response = await fetch(url);
    const result: Windmill[] = await response.json();

    console.log("Windmill list fetched successfully:", result);
    return result;
  } catch (error) {
    console.error("Windmill service failed to fetch windmill list:", error);
    throw error;
  }
};
