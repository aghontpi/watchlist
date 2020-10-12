import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import People from "./Components/People";

export interface Cast {
  actor: string;
  img: string;
  role: string;
}

export interface CrewProps {
  directors?: string[];
  actors: Cast[];
}

const { width: wWidth } = Dimensions.get("window");

const Crew = ({ actors }: CrewProps) => (
  <View>
    <Text style={{ fontSize: 24, color: "#12153D" }}>Cast</Text>
    <View style={{ position: "relative" }}>
      <View style={{ position: "absolute", width: wWidth, left: -32 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal={true}
          style={{ marginTop: 16 }}
          centerContent={true}
        >
          {/* {directors &&
            directors.map((name, _) => (
              <People key={name} role="Director" {...{ name }} />
            ))} */}
          {actors &&
            actors.map((item) => (
              <View key={item.actor} style={{ marginLeft: 30 }}>
                <People name={item.actor} {...item} />
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  </View>
);

Crew.defaultProps = {
  directors: null,
};

export default Crew;
