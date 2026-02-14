import Theme from "@/styles/Theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const OPERATIONS: {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  backgroundColor: string;
  size: number;
}[] = [
  {
    label: "Income",
    icon: "wallet-plus",
    color: "#2356E3",
    backgroundColor: "#ECF4FE",
    size: Theme.iconSize.m,
  },
  {
    label: "Expense",
    icon: "cash",
    color: "#DB2529",
    backgroundColor: "#FEF0F0",
    size: Theme.iconSize.l,
  },
  {
    label: "Upload",
    icon: "receipt-text-plus",
    color: "#8C29E1",
    backgroundColor: "#FAF3FF",
    size: Theme.iconSize.m,
  },
  {
    label: "Reports",
    icon: "file-account",
    color: "#F69529",
    backgroundColor: "#FFFBE9",
    size: Theme.iconSize.m,
  },
];
