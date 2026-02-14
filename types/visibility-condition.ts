type Operator = "eq" | "neq" | "lte" | "gte"; // eq by default

interface BooleanCondition {
  type: "boolean";
  dependsOn: string;
  value: boolean;
  operator: Operator;
}

interface StringCondition {
  type: "string";
  dependsOn: string;
  value: string;
  operator: Operator;
}

interface NumberCondition {
  type: "number";
  dependsOn: string;
  value: number;
  operator: Operator;
}

interface AndCondition {
  type: "and";
  conditions: VisibilityCondition[];
}

interface OrCondition {
  type: "or";
  conditions: VisibilityCondition[];
}

export type VisibilityCondition =
  | AndCondition
  | OrCondition
  | BooleanCondition
  | StringCondition
  | NumberCondition;
