import React from "react";
import { View, Text } from "react-native";

interface RatingProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Rating = ({ icon, title, subtitle }: RatingProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View>{icon}</View>
      <Text style={{ fontSize: 16 }}>Rate this</Text>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Romato{"\n"}Score
      </Text>
    </View>
  );
};

export default Rating;
