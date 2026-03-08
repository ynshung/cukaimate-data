import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const AngelInvestor: Question = {
  id: RELIEF_IDS.ANGEL_INVESTOR,
  icon: "hand-holding-dollar",
  title: "Angel Investor Incentive",
  description:
    "Have you invested on companies under the angel investor tax incentive?",
  tips: "If you don't know what this means, you probably don't need to worry about it.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `
## (i) Angel Investor
A tax incentive for investment made by a qualified angel investor in a qualified investee company. The amount of aggregate income exempted is an amount equal to the amount of investment made by the angel investor in the investee company. The exemption is granted subject to the conditions specified by the Minister in the approval letter for the investment, which include the following:

1. the investment must not be disposed of (fully or in part) within two (2) years from the date the investment is made; and
2. the amount of investment made per annum must not be less than RM5,000 and not more than RM500,000.

Application to make an investment in an investee company is made on or after 1 January 2013 but not later than 31 December 2023 for the approval of the Minister of Finance.

Refer to the Income Tax (Exemption) (No. 3) 2014 [P.U. (A) 167/2014], Income Tax (Exemption) (Amendment) 2019 [P.U. (A) 399/2019] and Public Ruling No. 12/2020 for further information.

Amount in B7 is restricted to the amount in B6 (restricted to RM500,000). If the amount in B7 exceeds the amount in B6, enter the amount as per B6 in this item.


**OR**

## (ii) Equity Crowdfunding
Tax incentive for an investment made by an individual resident in an investee company on or after 1 January 2021 but not later than 31 December 2026 and made an investment in the form of holding shares which are paid in cash to the investee company through an equity crowdfunding platform or through nominee limited liability partnership or nominee company. The exemption granted is subject to terms that stated in P.U.(A)367/2024 which includes the following:
  
1. The investment is not disposed of (in full or in part) within two (2) years from the date the investment is made; and
2. an amount equal to fifty per cent of the amount of investment made by the qualifying individual and shall not exceed fifty thousand ringgit for each year of assessment; and
3. limited to ten per cent of the aggregate income of the qualifying individual in the basis period for a year of assessment in which the exemption is granted.

Refer to the Income Tax (Exemption) (No. 4) 2022 [P.U. (A) 142/2022], Income Tax (Exemption) (No. 4) 2022 (Amendment) 2024 [P.U. (A) 367/2024] and Public Ruling No. 12/2020 for further information.

Amount in B7 is restricted to 50% of the amount of investment (Not exceed RM50,000) and 10% of B6.`,
};
