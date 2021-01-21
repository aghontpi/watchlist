import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { StarIcon } from "../../../../Components";
import { FontType, Size } from "../../../../Components/StyleConstants";

interface IdbIconProps {
  rating: string;
  ratingCount: string;
}

const IdbIcon = ({ rating, ratingCount }: IdbIconProps) => {
  return (
    <View style={style.container}>
      <StarIcon />
      <View style={style.ratingContainer}>
        <Text style={style.ratingText}>{rating.split("/")[0]}</Text>
        <Text style={style.ratingOutOf}>/10</Text>
      </View>
      <Text style={style.totalRatingCount}>{ratingCount}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ratingContainer: { flexDirection: "row", marginTop: Size.s - 4 },
  ratingText: {
    color: "#12153D",
    fontSize: FontType.body,
    fontWeight: "bold",
  },
  ratingOutOf: {
    color: "#434670",
    alignSelf: "center",
    fontSize: FontType.body - 2,
    marginTop: 2,
  },
  totalRatingCount: {
    color: "#9A9BB2",
    fontSize: FontType.body - 4,
  },
});

export { style as IdbIconStyle };
export default IdbIcon;
