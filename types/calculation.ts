export interface Sum {
  type: "sum";
  id?: string;
  idList: string[];
}

export interface Minus {
  type: "minus";
  id?: string;
  // id1 - id2 (0 if negative)
  id1: string;
  id2: string;
  allowNegative?: boolean;
}

export interface Multiply {
  type: "multiply";
  id?: string;
  id1: string;
  multiplier: number;
}

export interface TieredTax {
  type: "tiered-tax";
  id?: string;
  id1: string; // chargeable income
  brackets: {
    threshold: number;
    rate: number;
    baseTax: number;
  }[];
  resultType: "tax-on-first" | "tax-on-rate" | "rate" | "balance";
}

export type Calculation = Sum | Minus | Multiply | TieredTax;
