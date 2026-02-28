import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const Section107D: Question = {
  id: PAID_IDS.SECTION_107D,
  title: "Section 107D",
  description:
    "Tax deduction of 2% made by the payer company for each cash payment to agents, dealers or distributors.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Enter the total amount of the tax deduction of 2% made by the payer company for each cash payment to agents, dealers or distributors for the year 2025 in this item.
  
  Please refer to: [Soalan Lazim Berkaitan Potongan Cukai 2% Terhadap Pembayaran Oleh Syarikat Pembayar Kepada Ejen, Pengedar atau Pengagih](https://www.hasil.gov.my/media/vp4dn0w0/pindaan-soalan-lazim-seksyen-107d.pdf).`
};
