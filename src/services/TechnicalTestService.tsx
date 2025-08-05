import type { Windmill } from "../types/windmill/WindmillTypes";

export const localWindmillUrl = import.meta.env.VITE_WINDMILL_API_URL;

export const fetchWindmillList = async () => {
  const url = `/api/asset`;

  try {
    const response = await fetch(url);
    const result: Windmill[] = await response.json();

    return result;
  } catch (error) {
    console.error("Windmill service failed to fetch windmill list:", error);
    throw error;
  }
};

export const deleteWindmill = async (id: number) => {
  const url = `/api/asset/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete windmill with id ${id}`);
    }

    return true;
  } catch (error) {
    console.error("Windmill service failed to delete windmill:", error);
    throw error;
  }
};

export const updateWindMill = async (id: number, data: Partial<Windmill>) => {
  const url = `/api/asset/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit windmill with id ${id}`);
    }

    return true;
  } catch (error) {
    console.error("Windmill service failed to edit windmill:", error);
    throw error;
  }
};
