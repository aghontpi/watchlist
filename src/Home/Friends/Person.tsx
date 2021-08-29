import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Size, wWidth } from "../../Components/StyleConstants";
import { Button } from "../../Components";
import {
  RoundImageStyle,
  imgConversion,
} from "../Search/MovieView/Components/People";

interface Person {
  photo: string;
  email: string;
  name: string;
  buttonPress: () => void;
  active: boolean;
  overrideLabel?: string;
}

const Person = ({
  photo,
  email,
  name,
  active,
  buttonPress,
  overrideLabel,
}: Person) => {
  const [btnStatus, setBtnStatus] = useState<boolean>(active);
  const label = btnStatus ? "requested" : "add";
  return (
    <View style={style.container}>
      <View style={[RoundImageStyle.imgContainer]}>
        <ImageBackground
          source={{ uri: imgConversion(photo, true) }}
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
            <Text style={style.name}>{name}</Text>
            <Text style={style.email}>{email}</Text>
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
            <Button
              isActive={btnStatus}
              label={overrideLabel ? overrideLabel : label}
              onPress={() => {
                buttonPress();
                setBtnStatus(!btnStatus);
              }}
            />
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
