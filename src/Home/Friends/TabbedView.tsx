import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { wWidth } from "../../Components/StyleConstants";

interface TabbledViewProps {
  tabOne: ReactNode;
  tabTwo: ReactNode;
}

const TabbledView = ({ tabOne, tabTwo }: TabbledViewProps) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = -event.contentOffset.x;
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {};
  });
  return (
    <Animated.View style={[style.container, animatedStyle]}>
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={false}
        snapToInterval={wWidth}
      >
        {tabOne}
        {tabTwo}
      </Animated.ScrollView>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default TabbledView;
