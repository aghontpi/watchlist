import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Size, wWidth } from "../../Components/StyleConstants";

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

const Crew = ({ actors }: CrewProps) => (
  <View>
    <Text style={style.container}>Cast</Text>
    <View style={{ position: "relative" }}>
      <View style={style.crewContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal={true}
          style={{ marginTop: Size.m }}
          centerContent={true}
        >
          {/* {directors &&
            directors.map((name, _) => (
              <People key={name} role="Director" {...{ name }} />
            ))} */}
          {actors &&
            actors.map((item) => (
              <View key={item.actor} style={{ marginLeft: Size.xl }}>
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

const style = StyleSheet.create({
  container: {
    fontSize: Size.l,
    color: "#12153D",
  },
  crewContainer: { position: "absolute", width: wWidth, left: -1 * Size.xl },
});

export default Crew;
