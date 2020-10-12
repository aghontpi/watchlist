import React from "react";
import { View, Text, ImageBackground } from "react-native";

interface PeopleProps {
  img: string;
  role: string;
  name: string;
}

const SIZE = 80;

const imgConverison = (imgSrc: string): string => {
  return imgSrc
    ? imgSrc.slice(0, imgSrc.indexOf("_V1")) + `_SY${SIZE * 2}_.jpg`
    : `https://picsum.photos/${SIZE}/${SIZE}`;
};

const People = ({ name, role, img }: PeopleProps) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: SIZE / 2,
          width: SIZE,
          height: SIZE,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={{ uri: imgConverison(img) }}
          resizeMode="cover"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: undefined,
            height: undefined,
            flex: 1,
          }}
        />
      </View>
      <Text style={{ marginTop: 12, color: "#12153D", fontSize: 16 }}>
        {name}
      </Text>
      <Text style={{ color: "#9A9BB2", fontSize: 16 }}>{role}</Text>
    </View>
  );
};

export default People;
