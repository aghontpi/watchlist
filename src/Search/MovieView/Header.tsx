import React from "react";
import { View } from "react-native";

import { RoundedIcon } from "../../Components";
import { Size } from "../../Components/StyleConstants";

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
        marginLeft: Size.xl,
        marginRight: Size.xl,
        flexDirection: "row",
        justifyContent: left ? "space-between" : "flex-end",
      }}
    >
      {left && (
        <RoundedIcon
          iconRatio={1}
          size={Size.xl}
          {...left.icon}
          onPress={left.onPress}
        />
      )}
      {right && (
        <RoundedIcon
          iconRatio={1}
          size={Size.xl}
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
