import type { Windmill } from "./windmill-types";

export const localWindmillUrl = import.meta.env.VITE_WINDMILL_API_URL_LOCAL;

export const fetchWindmillList = async () => {
  const url = `${localWindmillUrl}/api/asset`;

  try {
    const response = await fetch(url);
    const result: Windmill = await response.json();

    return result;
  } catch (error) {
    console.error("Failed to fetch windmill list:", error);
    throw error;
  }
};
