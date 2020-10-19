import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { IMDB_YELLOW, StarIcon } from "../../../Components";
import { Size } from "../../../Components/StyleConstants";

interface RatingProps {
  heartOnPress: () => void;
  idbRating: string;
}

const Rating = ({ heartOnPress, idbRating }: RatingProps) => {
  return (
    <View style={style.container}>
      <View style={style.rating}>
        <StarIcon size={Size.m} />
        <Text style={style.ratingText}>{idbRating}</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        {/*TODO: have both rotten tomatoes and imdb rating show at list page. backend work*/}
        <Text>{""}</Text>
      </View>
      <View style={style.favourite}>
        <Icon name="heart" size={Size.l} onPress={() => heartOnPress()} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Size.l,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: Size.m,
    padding: Size.s,
    backgroundColor: "#FFF4E0",
    borderRadius: Size.s - 3,
  },
  ratingText: {
    color: IMDB_YELLOW,
    fontWeight: "bold",
    marginLeft: Size.s / 2,
  },
  favourite: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Rating;
