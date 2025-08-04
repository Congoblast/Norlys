import type { Windmill } from "../../services/windmill-types";

type AllowedColumns = Pick<Windmill, "id" | "brand" | "model" | "installedCapacityMw">;

export interface WindmillColumn {
  key: keyof AllowedColumns;
  label: string;
}

export const WINDMILL_COLUMNS: WindmillColumn[] = [
  { key: "id", label: "ID" },
  { key: "model", label: "Model" },
  { key: "brand", label: "Brand" },
  { key: "installedCapacityMw", label: "Installed Capacity (MW)" },
];
