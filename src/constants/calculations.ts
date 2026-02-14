export const GlobalCalculations = {
  AGGREGATE_INCOME: "aggregate-income",
  TOTAL_RELIEF: "total-relief",
  TOTAL_DEDUCTIBLE: "total-deductible",
  CHARGEABLE_INCOME: "chargeable-income",

  TAX_ON_FIRST: "tax-on-first",
  TAX_ON_RATE: "tax-on-rate",
  TAX_RATE: "tax-rate",
  TAX_RATE_BALANCE: "tax-rate-balance",
  TOTAL_TAX: "total-tax",

  TOTAL_REBATE: "total-rebate",
  TAX_CHARGED: "tax-charged",
  TOTAL_DEDUCTIONS: "total-deductions",
  TAX_PAYABLE: "tax-payable",
  BALANCE_TAX: "balance-tax",
  PAYMENT_MADE: "payment-made",
};

export const CALCULATION_LABELS: Record<string, string> = {
  [GlobalCalculations.AGGREGATE_INCOME]: "Aggregate Income",
  [GlobalCalculations.TOTAL_RELIEF]: "Total Relief",
  [GlobalCalculations.TOTAL_DEDUCTIBLE]: "Relief & Deductible",
  [GlobalCalculations.CHARGEABLE_INCOME]: "Chargeable Income",
  [GlobalCalculations.TAX_ON_FIRST]: "Tax on First",
  [GlobalCalculations.TAX_ON_RATE]: "Tax on Rate",
  [GlobalCalculations.TAX_RATE]: "Tax Rate",
  [GlobalCalculations.TAX_RATE_BALANCE]: "Tax Rate Balance",
  [GlobalCalculations.TOTAL_TAX]: "Total Income Tax",
  [GlobalCalculations.TOTAL_REBATE]: "Total Rebate",
  [GlobalCalculations.TAX_CHARGED]: "Total Tax Charged",
  [GlobalCalculations.TOTAL_DEDUCTIONS]: "Other Deductions",
  [GlobalCalculations.TAX_PAYABLE]: "Tax Payable",
  [GlobalCalculations.BALANCE_TAX]: "Tax Balance",
  [GlobalCalculations.PAYMENT_MADE]: "Payment Made",
};
