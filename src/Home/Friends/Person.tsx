import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Size } from "../../Components/StyleConstants";
import {
  RoundImageStyle,
  imgConversion,
} from "../Search/MovieView/Components/People";

const Person = () => {
  return (
    <View style={style.container}>
      <View style={RoundImageStyle.imgContainer}>
        <ImageBackground
          source={{ uri: imgConversion(null, true) }}
          style={RoundImageStyle.img}
        />
      </View>
      <View style={style.detailsContainer}>
        <Text>Bluepie</Text>
        <Text>gopinath2nr@gmail.com</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique
          commodi unde.
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: Size.s,
  },
  detailsContainer: {
    flexDirection: "row",
  },
});

export default Person;
