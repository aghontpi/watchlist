import React from "react";
import { View, Text } from "react-native";

const SIZE = 28;

interface MetaIconProps {
  rating: string;
  ratingCount: string;
}

const MetaIcon = ({ rating, ratingCount }: MetaIconProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#66cc33",
          height: SIZE - 4,
          width: SIZE,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          {rating}
        </Text>
      </View>
      <Text style={{ color: "#12153D", fontWeight: "bold", marginTop: 4 }}>
        Metascore
      </Text>
      <Text style={{ fontSize: 12, color: "#9A9BB2" }}>
        {ratingCount} reviews
      </Text>
    </View>
  );
};

export default MetaIcon;
