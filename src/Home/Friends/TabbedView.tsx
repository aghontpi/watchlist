import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import { Size, wWidth } from "../../Components/StyleConstants";

import { AnimatedTabName, Header, Indicator } from "./Components";

const TABS = ["Find", "Friends"];

interface TabbledViewProps {
  tabOne: ReactNode;
  tabTwo: ReactNode;
}

const TabbledView = ({ tabOne, tabTwo }: TabbledViewProps) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = -event.contentOffset.x;
  });
  const activeTab = useDerivedValue(() =>
    interpolate(translateX.value, [0, -wWidth / 2], [0, 1], Extrapolate.CLAMP)
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -translateX.value / 2 }],
    };
  });
  return (
    <View>
      <Header />
      <View style={style.tabtileContainer}>
        {TABS.map((v, i) => (
          <AnimatedTabName
            enabled={i === Math.floor(activeTab.value)}
            key={i}
            active={activeTab}
            label={v}
          />
        ))}
      </View>
      <Indicator style={animatedStyle} />
      <Animated.View>
        <Animated.ScrollView
          horizontal
          onScroll={scrollHandler}
          decelerationRate="fast"
          scrollEventThrottle={16}
          bounces={false}
          snapToInterval={wWidth}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {tabOne}
          {tabTwo}
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  tabtileContainer: { flexDirection: "row", marginTop: Size.m },
});

export default TabbledView;
