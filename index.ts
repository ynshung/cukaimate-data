import { FY2026 } from "@/FY2026";
import { FY2025 } from "./src/FY2025";

export const years = {
  [FY2025.year]: FY2025,
  [FY2026.year]: FY2026,
};

export type AvailableYears = keyof typeof years;
