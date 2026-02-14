import { FY2025 } from "./src/FY2025";

export const years = {
  [FY2025.year]: FY2025,
};

export type AvailableYears = keyof typeof years;
