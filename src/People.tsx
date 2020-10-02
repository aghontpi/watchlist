import React from "react";
import { View, Text } from "react-native";

interface PeopleProps {
  name: string;
  role: string;
}

const size = 64;

const People = ({ name, role }: PeopleProps) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: size / 2,
          backgroundColor: "blue",
          width: size,
          height: size,
        }}
      >
        {}
      </View>
      <Text style={{ marginTop: 12, color: "#12153D", fontSize: 16 }}>
        {name}
      </Text>
      <Text style={{ color: "#9A9BB2", fontSize: 16 }}>{role}</Text>
    </View>
  );
};

export default People;
