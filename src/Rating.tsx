import React from "react";
import { View, Text } from "react-native";

interface RatingProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Rating = ({ icon, title, subtitle }: RatingProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View>{icon}</View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

export default Rating;
