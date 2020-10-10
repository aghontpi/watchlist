import React from "react";
import { View, Text } from "react-native";

const SIZE = 28;

const MetaIcon = ({ rating }: { rating: string }) => {
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
        <Text style={{ color: "white", fontSize: 14 }}>{rating}</Text>
      </View>
      <Text style={{ color: "#12153D", marginTop: 9 }}>Metascore</Text>
    </View>
  );
};

export default MetaIcon;
