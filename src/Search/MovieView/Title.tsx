import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { RoundedIcon } from "../../Components";
import { FontType, Size } from "../../Components/StyleConstants";

interface TitleProps {
  title: string;
  genre: string[];
  runtime: string;
  release: string;
  certificate: string;
}

const Title = ({ title, genre, runtime, release, certificate }: TitleProps) => {
  return (
    <View>
      <View>
        <Text style={style.title}>{title}</Text>
        <View style={style.otherInfo}>
          <Text style={[style.otherInfoText, { marginLeft: 0 }]}>
            {release}
          </Text>
          <Text style={style.otherInfoText}>{certificate}</Text>
          <Text style={style.otherInfoText}>{runtime}</Text>
        </View>
        <View style={{ marginTop: Size.l - 4 }}>
          <ScrollView bounces={true} horizontal={true}>
            {genre.map((v: string, i: number) => (
              <View
                key={v}
                style={
                  i !== 0
                    ? { marginLeft: Size.l - 4, ...style.genreButton }
                    : style.genreButton
                }
              >
                <Text style={style.genreStyleText}>{v}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={style.absolutePositionLeft}>
        <RoundedIcon
          name="plus"
          iconRatio={0.3}
          backgroundColor="rgba(254,109,142,1)"
          size={Size.xl * 2}
          color="white"
          borderRadius={Size.l - 4}
          onPress={() => true}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: FontType.heading - 8,
    color: "rgba(18,21,61,1)",
    paddingRight: Size.xl * 2,
  },
  otherInfo: {
    marginTop: Size.s,
    flexDirection: "row",
  },
  otherInfoText: { marginLeft: Size.l, color: "rgba(154,155,178,1)" },
  genreButton: {
    borderRadius: 100,
    borderColor: "rgba(18,21,61,0.3)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  genreStyleText: {
    paddingVertical: Size.s,
    paddingHorizontal: Size.l - 4,
    color: "#434670",
    fontSize: Size.m,
  },
  absolutePositionLeft: {
    position: "absolute",
    right: 0,
    top: Size.s,
    bottom: 0,
  },
});

export default Title;
