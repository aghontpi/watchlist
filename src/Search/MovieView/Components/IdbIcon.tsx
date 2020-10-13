import React from "react";
import { View, Text } from "react-native";

import { StarIcon } from "../../../Components";

interface IdbIconProps {
  rating: string;
  ratingCount: string;
}

const IdbIcon = ({ rating, ratingCount }: IdbIconProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <StarIcon />
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        <Text
          style={{
            color: "#12153D",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {rating.split("/")[0]}
        </Text>
        <Text
          style={{
            color: "#434670",
            alignSelf: "center",

            fontSize: 14,
            marginTop: 2,
          }}
        >
          /10
        </Text>
      </View>
      <Text style={{ color: "#9A9BB2", fontSize: 12 }}>{ratingCount}</Text>
    </View>
  );
};

export default IdbIcon;
