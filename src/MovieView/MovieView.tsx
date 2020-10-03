import React, { useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from "react-native";

import Crew, { CrewProps } from "./Crew";
import Title from "./Title";

export interface MovieViewProps {
  image: ImageSourcePropType;
  title: string;
  overview: string;
  rating: { imdb: string; rottenTomatoes: string };
  genre: string[];
  crew: CrewProps;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const movieViewProps: MovieViewProps = {
  image: require("../assests/placeholder.jpeg"),
  title: "American Made",
  overview:
    // eslint-disable-next-line max-len
    "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966",
  rating: { imdb: "8", rottenTomatoes: "7.8" },
  genre: ["action", "racing", "drama"],
  crew: {
    directors: ["James Mangold"],
    actors: "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe".split(
      ", "
    ),
  },
};

const aspectRatio = 325 / 470;
const height = aspectRatio * wWidth;
const borderRadius = 64;
const ratingsBarHeight = 109;

const MovieView = () => {
  const [apiResonse, setApiResponse] = useState<MovieViewProps>(movieViewProps);
  const { crew, title, genre, rating, overview } = apiResonse;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ height: height, width: wWidth }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(100,100,200,0.5)",
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            overflow: "hidden",
          }}
        >
          <Text>placeholder for image here</Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: height - ratingsBarHeight / 2,
          height: ratingsBarHeight,
          right: 0,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          width: wWidth * 0.9,
          backgroundColor: "white",
          shadowColor: "black",
          elevation: 80,
        }}
      >
        <View>
          <Text>rating here</Text>
        </View>
      </View>
      <Text />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            height: wHeight - (height + ratingsBarHeight / 2),
            flex: 1,
            top: undefined,
            backgroundColor: "white",
            marginHorizontal: 32,
          },
        ]}
      >
        <Title
          title="Ford Vs Ferrari"
          genre={genre}
          runtime="1hr 32min"
          releasedYear="2019"
          certificate="U/A"
        />
        <View style={{ marginTop: 48 }}>
          <View>
            <Text style={{ fontSize: 24, color: "#12153D" }}>Plot</Text>
            <Text style={{ color: "#737599", fontSize: 16, marginTop: 16 }}>
              {overview}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 48 }}>
          <Crew directors={crew.directors} actors={crew.actors} />
        </View>
      </View>
    </View>
  );
};

export default MovieView;
