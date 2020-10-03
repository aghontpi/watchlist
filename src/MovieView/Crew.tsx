import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import People from "./People";

export interface CrewProps {
  directors: string[];
  actors: string[];
}

const { width: wWidth } = Dimensions.get("window");

const Crew = ({ directors, actors }: CrewProps) => (
  <View>
    <Text style={{ fontSize: 24, color: "#12153D" }}>Cast & Crew</Text>
    <View style={{ position: "relative" }}>
      <View style={{ position: "absolute", width: wWidth, left: -32 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal={true}
          style={{ marginTop: 16 }}
          centerContent={true}
        >
          {directors &&
            directors.map((name, _) => (
              <People key={name} role="Director" {...{ name }} />
            ))}
          {actors &&
            actors.map((name, _) => (
              <View key={name} style={{ marginLeft: 30 }}>
                <People role="acting" {...{ name }} />
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  </View>
);

export default Crew;
