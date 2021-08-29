import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import { FontType, Size } from "../../../../Components/StyleConstants";

interface PeopleProps {
  img: string;
  role: string;
  name: string;
}

const SIZE = Size.xxl * 2;

const wrapText = (s: string, w: number) =>
  s.replace(new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, "g"), "$1\n");

const imgConversion = (imgSrc: string | null, normal = false): string => {
  const placeholder = `https://picsum.photos/${SIZE}/${SIZE}`;
  if (normal) {
    return imgSrc ? imgSrc : placeholder;
  }
  return imgSrc
    ? imgSrc.slice(0, imgSrc.indexOf("_V1")) + `_SY${SIZE * 2}_.jpg`
    : placeholder;
};

const People = ({ name, role, img }: PeopleProps) => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <ImageBackground
          source={{ uri: imgConversion(img) }}
          resizeMode="cover"
          style={style.img}
        />
      </View>
      <Text style={style.name}>{wrapText(name, 18)}</Text>
      <Text style={style.role}>{wrapText(role, 18)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    borderRadius: SIZE / 2,
    width: SIZE,
    height: SIZE,
    overflow: "hidden",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    width: undefined,
    height: undefined,
    flex: 1,
  },
  name: {
    marginTop: Size.m - 4,
    color: "#12153D",
    fontSize: FontType.body,
    textAlign: "center",
  },
  role: { color: "#9A9BB2", fontSize: FontType.body, textAlign: "center" },
});

export default People;
export { style as RoundImageStyle, imgConversion };
