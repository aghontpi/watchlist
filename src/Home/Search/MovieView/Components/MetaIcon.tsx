import React from "react";
import { View, Text } from "react-native";

import { FontType, Size } from "../../../../Components/StyleConstants";

import { IdbIconStyle } from "./IdbIcon";

interface MetaIconProps {
  rating: string;
  ratingCount: string;
}

const MetaIcon = ({ rating, ratingCount }: MetaIconProps) => {
  return (
    <View style={IdbIconStyle.container}>
      <View
        style={{
          backgroundColor: "#66cc33",
          height: Size.xl - 8,
          width: Size.xl - 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            IdbIconStyle.ratingText,
            { fontSize: FontType.body - 2, color: "white" },
          ]}
        >
          {rating}
        </Text>
      </View>
      <Text
        style={[
          IdbIconStyle.ratingText,
          { marginTop: 4, fontSize: FontType.body - 2 },
        ]}
      >
        Metascore
      </Text>
      <Text style={IdbIconStyle.totalRatingCount}>{ratingCount} reviews</Text>
    </View>
  );
};

export default MetaIcon;
