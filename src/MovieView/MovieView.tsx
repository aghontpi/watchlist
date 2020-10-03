import React, { useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import Crew, { CrewProps } from "./Crew";
import Rating from "./Rating";
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
  const { crew, title, genre, rating, overview, image } = apiResonse;

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
          <ImageBackground
            source={image}
            imageStyle={{ resizeMode: "cover" }}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: undefined,
              height: undefined,
            }}
          />
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
        <View style={{ flex: 1 }}>
          <Rating
            icon={
              <View style={{ alignItems: "center" }}>
                <StarIcon />
                <View style={{ flexDirection: "row", marginTop: 4 }}>
                  <Text
                    style={{
                      color: "#12153D",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    8.2
                  </Text>
                  <Text
                    style={{
                      color: "#434670",
                      alignSelf: "center",

                      fontSize: 14,
                      marginTop: 2,
                    }}
                  >
                    /10
                  </Text>
                </View>
                <Text style={{ color: "#9A9BB2", fontSize: 12 }}>153,374</Text>
              </View>
            }
            title="4.8"
            subtitle="subtitle"
          />
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

const StarIcon = () => (
  <Svg width={28} height={27} viewBox="0 0 28 27" fill="none">
    <Path
      // eslint-disable-next-line max-len
      d="M21.413 26c-.213 0-.423-.05-.613-.147l-6.8-3.56-6.8 3.56a1.334 1.334 0 01-1.933-1.413L6.6 16.933 1.107 11.6a1.333 1.333 0 01-.334-1.333 1.333 1.333 0 011.08-.907l7.6-1.107 3.347-6.84a1.334 1.334 0 012.4 0l3.387 6.827 7.6 1.107a1.333 1.333 0 011.08.906 1.334 1.334 0 01-.334 1.334L21.44 16.92l1.333 7.507a1.333 1.333 0 01-.533 1.333c-.241.17-.532.254-.827.24z"
      fill="#FCC419"
    />
  </Svg>
);

export default MovieView;
