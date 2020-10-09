import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { ImdbStar, IMDB_YELLOW } from "../MovieView";

const Rating = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: 16,
          padding: 8,
          backgroundColor: "#FFF4E0",
          borderRadius: 5,
        }}
      >
        <ImdbStar size={16} />
        <Text
          style={{
            color: IMDB_YELLOW,
            fontWeight: "bold",
            marginLeft: 8 / 2,
          }}
        >
          5.6
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text>rt</Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Icon name="heart" size={24} />
      </View>
    </View>
  );
};

export default Rating;
