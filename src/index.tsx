import React from "react";
import { StyleSheet, View } from "react-native";

import MovieView, { MovieViewProps } from "./MovieView";

const movieViewProps: MovieViewProps = {
  image: require("./assests/fordvferrari-poster.jpeg"),
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

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <MovieView {...movieViewProps} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
