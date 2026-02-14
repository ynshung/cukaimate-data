import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const AngelInvestor: Question = {
  id: RELIEF_IDS.ANGEL_INVESTOR,
  icon: {
    pack: "MI",
    name: "trending-up",
  },
  title: "Angel Investor Incentive",
  description:
    "Have you invested on companies under the angel investor tax incentive?",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `
(i)  A tax incentive for investment made by a qualified angel investor in a qualified investee company. The amount of aggregate income exempted is an amount equal to the amount of investment made by the angel investor in the investee company. The exemption is granted subject to the conditions specified by the Minister in the approval letter for the investment, which include the following:

- (a) the investment must not be disposed of (fully or in part) within two (2) years from the date the investment is made; and
- (b) the amount of investment made per annum must not be less than RM5,000 and not more than RM500,000.

Application to make an investment in an investee company is made on or after **1 January 2013** but not later than **31 December 2023** for the approval of the Minister of Finance.

Refer to the _Income Tax (Exemption) (No. 3) 2014 [P.U. (A) 167/2014]_ and _Income Tax (Exemption) (Amendment) 2019 [P.U. (A) 399/2019]_ and _Public Ruling No. 12/2020_ for further information.

> **Note:** Amount in B6 is restricted to the amount in B5. If the amount in B6 exceeds the amount in B5, enter the amount as per B5 in this item.

**OR**

(ii) Tax incentive for an investment made by an individual resident in an investee company on or after **1 January 2021** but not later than **31 December 2023** and made an investment in the form of holding shares which are paid in cash to the investee company through en equity crowdfunding platform or through a nominee company. The exemption granted is subject to terms that stated in _P.U.(A)142/2022_ which includes the following:

- (a) an amount equal to fifty per cent of the amount of investment made by the qualifying individual and shall not exceed fifty thousand ringgit for each year of assessment; and
- (b) limited to ten per cent of the aggregate income of the qualifying individual in the basis period for a year of assessment in which the exemption is granted.

Refer to the _Income Tax (Exemption) (No. 4) 2022 [P.U. (A) 142/2022]_ and _Public Ruling No. 12/2020_ for further information.

> **Note:** Amount in B6 is restricted to 50% of the amount of investment (Not exceed RM50,000) and 10% of B5.`,
};
