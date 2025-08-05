import type { Windmill } from "../../types/windmill/WindmillTypes";

type AllowedColumns = Pick<Windmill, "id" | "brand" | "model" | "installedCapacityMw">;

export interface WindmillColumn {
  key: keyof AllowedColumns;
  label: string;
  type: "text" | "number";
}

export const WINDMILL_COLUMNS: WindmillColumn[] = [
  { key: "id", label: "ID", type: "number" },
  { key: "brand", label: "Brand", type: "text" },
  { key: "model", label: "Model", type: "text" },
  { key: "installedCapacityMw", label: "Installed Capacity (MW)", type: "number" },
];
