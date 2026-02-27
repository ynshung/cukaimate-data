import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const AccountOutsideMalaysia: Question = {
  id: PERSONAL_IDS.ACCOUNT_OUTSIDE_MALAYSIA,
  icon: "earth-americas",
  title: "Account Outside Malaysia",
  description: "Do you have any financial accounts outside Malaysia?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
  explanatoryNotes: `This declaration is a counter check measure to ensure compliance of the **Malaysian tax law**, in line with Malaysia’s commitment to the **Automatic Exchange of Financial Account Information** with other tax jurisdictions. Under this commitment, Malaysia will also be receiving information on financial accounts kept at overseas by Malaysian tax resident.

However, please note that having a financial account(s) in overseas is not an indication that a tax non-compliance has occurred.

**“Financial Account”** refers to a financial account maintained by a financial institution outside Malaysia which includes:

### (i) Depository Accounts
* Savings account, current account and other deposit accounts.

### (ii) Custodial Accounts
* An account (other than an Insurance Contract or Annuity Contract) for the benefit of another person that holds any financial instrument or contract held for investment.

### (iii) Cash Value Insurance Contracts
* An insurance contract where the policyholder is entitled to receive payment on surrender or termination of the contract. 
* An insurance contract will also be a Cash Value Insurance Contract where the policyholder can borrow against the contract. 
* It is an investment product that has an element of life insurance attached to it. The life insurance element usually is small compared to the investment element.

### (iv) Annuity Contracts
A contract:
* Under which the issuer agrees to make payments for a period of time determined in whole or in part by reference to the life expectancy of one or more individuals; or
* That is considered to be an annuity contract in accordance with the law, regulation or practice of Malaysia in which the contract was issued and under which the issuer agrees to make payments for a term of years.

### (v) Equity and Debt Interests in Investment Entities.
  `
};
