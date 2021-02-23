import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Size, wWidth } from "../../Components/StyleConstants";
import { Button } from "../../Components";
import {
  RoundImageStyle,
  imgConversion,
} from "../Search/MovieView/Components/People";

const Person = () => {
  return (
    <View style={style.container}>
      <View style={[RoundImageStyle.imgContainer]}>
        <ImageBackground
          source={{ uri: imgConversion(null, true) }}
          style={RoundImageStyle.img}
        />
      </View>
      <View style={style.detailsContainer}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={style.name}>Bluepie</Text>
            <Text style={style.email}>gopinath2nr@gmail.com</Text>
          </View>
          {/*TODO: fix the button overflow, */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Button isActive={true} label="friends" onPress={() => true} />
          </View>
        </View>
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
    flexDirection: "row",
    paddingVertical: Size.m,
    width: wWidth,
  },
  detailsContainer: {
    flexDirection: "column",
    paddingLeft: Size.s,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  email: {
    color: "#6b7489",
    marginBottom: Size.s,
  },
});

export default Person;
