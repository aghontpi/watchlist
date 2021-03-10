import React from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { mixColor } from "react-native-redash";

interface TabNameProps {
  active: Animated.SharedValue<number>;
  label: string;
  enabled: boolean;
}

const AnimatedTabName = ({ active, label, enabled }: TabNameProps) => {
  const color = useDerivedValue(() => {
    return enabled
      ? mixColor(active.value, "#20A1F5", "black")
      : mixColor(active.value, "black", "#20A1F5");
  });

  const style = useAnimatedStyle(() => {
    return {
      fontWeight: "bold",
      color: color.value,
    };
  });
  return (
    <Animated.View key={label} style={{ flex: 1, alignItems: "center" }}>
      <Animated.Text style={style}>{label}</Animated.Text>
    </Animated.View>
  );
};

export default AnimatedTabName;
