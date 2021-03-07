import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Size, wWidth } from "../../Components/StyleConstants";

interface TabbledViewProps {
  tabOne: ReactNode;
  tabTwo: ReactNode;
}

interface TabNameProps {
  active: number;
}

const TabName = ({ active }: TabNameProps) => {
  return (
    <View style={{ flexDirection: "row", marginTop: Size.m }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "#20A1F5", fontWeight: "bold" }}>tabone</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>tabtwo</Text>
      </View>
    </View>
  );
};

interface Indicator {
  style: ReturnType<typeof useAnimatedStyle>;
}
const Indicator = ({ style }: Indicator) => {
  return (
    <Animated.View style={{ flexDirection: "row", height: Size.s }}>
      <Animated.View
        style={[
          {
            width: wWidth / 2,
            backgroundColor: "#1C9EEF",
            borderRadius: Size.s / 2,
          },
          style,
        ]}
      />
    </Animated.View>
  );
};

const TabbledView = ({ tabOne, tabTwo }: TabbledViewProps) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = -event.contentOffset.x;
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -translateX.value / 2 }],
    };
  });
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            backgroundColor: "#E7ECF0",
            height: Size.xxl,
            width: wWidth - Size.xxl * 2,
            borderRadius: Size.xxl / 2,
          }}
        />
      </View>
      <TabName />
      <Indicator style={animatedStyle} />
      <View style={{ height: Size.l }} />
      <Animated.View style={[style.container]}>
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default TabbledView;
