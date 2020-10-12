import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { MovieInfoContext } from "../../Context";

import { MetaIcon } from "./Components";
import IdbIcon from "./Components/IdbIcon";
import Crew, { Cast } from "./Crew";
import Rating from "./Rating";
import Title from "./Title";

export interface MovieViewProps {
  genre: string[];
  certificate: string;
  runtime: string;
  release: string;
  title: string;
  cast: Cast[];
  directors: string[];
  rating: string;
  ratingCount: string;
  metaScore: string;
  poster: string;
  metaCriticCount: string;
  overview: string;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const aspectRatio = 325 / 470;
const height = aspectRatio * wWidth;
const borderRadius = 64;
const ratingsBarHeight = 109;

const posterConversion = (imgSrc: string): string => {
  return imgSrc ? imgSrc.slice(0, imgSrc.indexOf("_V1")) + "_SY720_.jpg" : "";
};

const MovieView = () => {
  const { movieInfo } = useContext(MovieInfoContext);

  if (!movieInfo) {
    return <Text>Movie not available</Text>;
  }

  const {
    genre,
    certificate,
    runtime,
    release,
    title,
    cast,
    directors,
    rating,
    ratingCount,
    metaScore,
    poster,
    overview,
    metaCriticCount,
  } = movieInfo;

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
            source={{ uri: posterConversion(poster) }}
            resizeMode="cover"
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
            idbIcon={<IdbIcon rating={rating} {...{ ratingCount }} />}
            title="Your rating?"
            metaIcon={
              <MetaIcon rating={metaScore} ratingCount={metaCriticCount} />
            }
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
        <Title {...{ title, genre, runtime, release, certificate }} />
        <View style={{ marginTop: 48 }}>
          <View>
            <Text style={{ fontSize: 24, color: "#12153D" }}>Plot</Text>
            <Text style={{ color: "#737599", fontSize: 16, marginTop: 16 }}>
              {overview}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 48 }}>
          <Crew actors={cast} />
        </View>
      </View>
    </View>
  );
};

interface StarIconProps {
  size: number;
}

export const IMDB_YELLOW = "#FCC419";

export const StarIcon = ({ size }: StarIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 28 27" fill="none">
    <Path
      // eslint-disable-next-line max-len
      d="M21.413 26c-.213 0-.423-.05-.613-.147l-6.8-3.56-6.8 3.56a1.334 1.334 0 01-1.933-1.413L6.6 16.933 1.107 11.6a1.333 1.333 0 01-.334-1.333 1.333 1.333 0 011.08-.907l7.6-1.107 3.347-6.84a1.334 1.334 0 012.4 0l3.387 6.827 7.6 1.107a1.333 1.333 0 011.08.906 1.334 1.334 0 01-.334 1.334L21.44 16.92l1.333 7.507a1.333 1.333 0 01-.533 1.333c-.241.17-.532.254-.827.24z"
      fill={IMDB_YELLOW}
    />
  </Svg>
);
StarIcon.defaultProps = {
  size: 20,
};

export default MovieView;
