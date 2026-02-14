import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type MCIIcon = {
  pack: "MCI";
  name: keyof typeof MaterialCommunityIcons.glyphMap;
};

type MIIcon = {
  pack: "MI";
  name: keyof typeof MaterialIcons.glyphMap;
};

type FAIcon = {
  pack: "FA";
  name: keyof typeof FontAwesome6.glyphMap;
};

export type Icons = MCIIcon | MIIcon | FAIcon;
