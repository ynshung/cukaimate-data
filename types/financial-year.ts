import { Calculation } from "./calculation";
import { Icons } from "./icons";
import { InputType, Limit } from "./input-type";
import { VisibilityCondition } from "./visibility-condition";

export interface Section {
  id: string;
  title: string;
  icon?: Icons;
  questions: (Question | Section)[];
  visibilityCondition?: VisibilityCondition;
  sectionLimit?: Limit;
  noSubsectionDisplay?: boolean;
  color?: string;
}

export interface Question {
  id: string; // current-status, dental-treatment
  icon?: Icons;
  title: string;
  description: string;
  explanatoryNotes?: string;
  allowAttachment: boolean;

  inputType: InputType;
  visibilityCondition?: VisibilityCondition;
  excludeSum?: boolean;
}

export interface FinancialYear {
  year: number;
  type: "BE";
  sections: Section[];
  startDate: Date;
  endDate: Date;
  startFilingDate: Date;
  endFilingDate: Date;
  calculations: Map<string, Calculation>;
}
