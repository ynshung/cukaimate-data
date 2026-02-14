import { Calculation } from "./calculation";

type SelectInput = {
  type: "select";
  options: {
    value: string;
    title: string;
  }[];
};

type FixedLimit = {
  type: "fixed-limit";
  limit: number;
};

type ItemLimit = {
  type: "item-limit";
  id: string;
};

type CalculationLimit = {
  type: "calculation-limit";
  calculation: Calculation;
};

export type Limit = FixedLimit | ItemLimit | CalculationLimit;

type NumberInput = {
  type: "number";
  isCurrency: boolean;
  totalLimit?: Limit; // unlimited by default
  fixed?: number; // fixed value, disabled input
};

type BooleanInput = {
  type: "boolean";
  valueIfTrue?: number;
};

type CustomComponent = {
  type: "custom-component";
  component: string;
};

export type InputType =
  | SelectInput
  | NumberInput
  | BooleanInput
  | CustomComponent;
