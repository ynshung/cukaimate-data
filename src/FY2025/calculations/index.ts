import { GlobalCalculations } from "@/constants/calculations";
import { Calculation, Minus, Sum, TieredTax } from "@/types/calculation";
import { INCOME_IDS } from "../2-income/constants";
import { DONATIONS_IDS } from "../3-donations/constants";
import { RELIEF_IDS } from "../4-relief/constants";
import { REBATE_IDS } from "../5-rebate/constants";
import { OTHER_IDS } from "../6-other/constants";
import { PAID_IDS } from "../7-paid/constants";

const AggregateIncome: Sum = {
  type: "sum",
  idList: [
    INCOME_IDS.EMPLOYMENT_INCOME,
    INCOME_IDS.RENTAL_INCOME,
    INCOME_IDS.OTHER_INCOME,
    INCOME_IDS.NON_MALAYSIA_INCOME,
  ],
};

// Minus angel investor from the relief section since it's not in section G
const TotalRelief: Minus = {
  type: "minus",
  id1: RELIEF_IDS.SECTION,
  id2: RELIEF_IDS.ANGEL_INVESTOR,
};

const TotalDeductible: Sum = {
  type: "sum",
  id: GlobalCalculations.TOTAL_DEDUCTIBLE,
  idList: [RELIEF_IDS.SECTION, DONATIONS_IDS.SECTION],
};

const ChargeableIncome: Minus = {
  type: "minus",
  id1: INCOME_IDS.SECTION,
  id2: GlobalCalculations.TOTAL_DEDUCTIBLE,
};

const TAX_BRACKETS = [
  { threshold: 0, rate: 0, baseTax: 0 },
  { threshold: 5000, rate: 0.01, baseTax: 0 },
  { threshold: 20000, rate: 0.03, baseTax: 150 },
  { threshold: 35000, rate: 0.06, baseTax: 600 },
  { threshold: 50000, rate: 0.11, baseTax: 1500 },
  { threshold: 70000, rate: 0.19, baseTax: 3700 },
  { threshold: 100000, rate: 0.25, baseTax: 9400 },
  { threshold: 400000, rate: 0.26, baseTax: 84400 },
  { threshold: 600000, rate: 0.28, baseTax: 136400 },
  { threshold: 2000000, rate: 0.3, baseTax: 528400 },
];

const TaxOnFirst: TieredTax = {
  type: "tiered-tax",
  id1: GlobalCalculations.CHARGEABLE_INCOME,
  brackets: TAX_BRACKETS,
  resultType: "tax-on-first",
};

const TaxOnRate: TieredTax = {
  type: "tiered-tax",
  id1: GlobalCalculations.CHARGEABLE_INCOME,
  brackets: TAX_BRACKETS,
  resultType: "tax-on-rate",
};

const TaxRate: TieredTax = {
  type: "tiered-tax",
  id1: GlobalCalculations.CHARGEABLE_INCOME,
  brackets: TAX_BRACKETS,
  resultType: "rate",
};

const TaxRateBalance: TieredTax = {
  type: "tiered-tax",
  id1: GlobalCalculations.CHARGEABLE_INCOME,
  brackets: TAX_BRACKETS,
  resultType: "balance",
};

const TotalTax: Sum = {
  type: "sum",
  idList: [GlobalCalculations.TAX_ON_FIRST, GlobalCalculations.TAX_ON_RATE],
};

// Total Rebate - actual sum of all rebates
const TotalRebate: Sum = {
  type: "sum",
  idList: [REBATE_IDS.SECTION],
};

const TaxCharged: Minus = {
  type: "minus",
  id1: GlobalCalculations.TOTAL_TAX,
  id2: GlobalCalculations.TOTAL_REBATE,
};

// Total Deductions - actual sum of all deductions (section 110 & 132/133)
const TotalDeductions: Sum = {
  type: "sum",
  idList: [OTHER_IDS.SECTION],
};

const TaxPayable: Minus = {
  type: "minus",
  id1: GlobalCalculations.TAX_CHARGED,
  id2: GlobalCalculations.TOTAL_DEDUCTIONS,
  allowNegative: true,
};

// Payment Made - actual sum of all payments made
const PaymentMade: Sum = {
  type: "sum",
  idList: [PAID_IDS.SECTION],
};

const BalanceTax: Minus = {
  type: "minus",
  id1: GlobalCalculations.TAX_PAYABLE,
  id2: GlobalCalculations.PAYMENT_MADE,
  allowNegative: true,
};

export const Calculations2025 = new Map<string, Calculation>([
  [GlobalCalculations.AGGREGATE_INCOME, AggregateIncome],
  [GlobalCalculations.TOTAL_RELIEF, TotalRelief],
  [GlobalCalculations.TOTAL_DEDUCTIBLE, TotalDeductible],
  [GlobalCalculations.CHARGEABLE_INCOME, ChargeableIncome],
  [GlobalCalculations.TAX_ON_FIRST, TaxOnFirst],
  [GlobalCalculations.TAX_ON_RATE, TaxOnRate],
  [GlobalCalculations.TAX_RATE, TaxRate],
  [GlobalCalculations.TAX_RATE_BALANCE, TaxRateBalance],
  [GlobalCalculations.TOTAL_TAX, TotalTax],
  [GlobalCalculations.TOTAL_REBATE, TotalRebate],
  [GlobalCalculations.TAX_CHARGED, TaxCharged],
  [GlobalCalculations.TOTAL_DEDUCTIONS, TotalDeductions],
  [GlobalCalculations.TAX_PAYABLE, TaxPayable],
  [GlobalCalculations.PAYMENT_MADE, PaymentMade],
  [GlobalCalculations.BALANCE_TAX, BalanceTax],
]);
