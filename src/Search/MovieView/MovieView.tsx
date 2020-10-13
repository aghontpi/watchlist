import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

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

export default MovieView;
