import React from "react";
import { View } from "react-native";

import { RoundedIcon } from "../../Components";

interface HeaderProps {
  left?: {
    icon: HeaderIconProps;
    onPress: () => void;
  };
  right?: {
    icon: HeaderIconProps;
    onPress: () => void;
  };
}

interface HeaderIconProps {
  name: string;
  color: string;
  backgroundColor: string;
}

const Header = ({ left, right }: HeaderProps) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 32,
        marginRight: 32,
        flexDirection: "row",
        justifyContent: left ? "space-between" : "flex-end",
      }}
    >
      {left && (
        <RoundedIcon
          iconRatio={1}
          size={32}
          {...left.icon}
          onPress={left.onPress}
        />
      )}
      {right && (
        <RoundedIcon
          iconRatio={1}
          size={32}
          {...right.icon}
          onPress={right.onPress}
        />
      )}
    </View>
  );
};

Header.defaultProps = {
  left: undefined,
  right: undefined,
};

export default Header;
