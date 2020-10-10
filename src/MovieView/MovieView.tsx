import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { MovieInfoContext } from "../Context";

import { MetaIcon } from "./Components";
import IdbIcon from "./Components/IdbIcon";
import Crew, { Cast, CrewProps } from "./Crew";
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
  poster?: string;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const aspectRatio = 325 / 470;
const height = aspectRatio * wWidth;
const borderRadius = 64;
const ratingsBarHeight = 109;

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
  } = {
    genre: ["Action", "Biography", "Drama"],
    certificate: "PG-13",
    runtime: "2h 32min",
    release: "15 November 2019 (USA)",
    title: "Ford v Ferrari",
    cast: [
      {
        actor: "Matt Damon",
        img:
          "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_UY44_CR0,0,32,44_AL_.jpg",
        role: "Carroll Shelby",
      },
      {
        actor: "Christian Bale",
        img:
          "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "Ken Miles",
      },
      {
        actor: "Jon Bernthal",
        img:
          "https://m.media-amazon.com/images/M/MV5BMTcwNzA5MDg0OV5BMl5BanBnXkFtZTcwMTU2NjE0Nw@@._V1_UY44_CR0,0,32,44_AL_.jpg",
        role: "Lee Iacocca",
      },
      {
        actor: "Caitriona Balfe",
        img:
          "https://m.media-amazon.com/images/M/MV5BZTM4ZDBhYWMtZmQ0Ny00YjI0LWFhMTEtM2IwNmZlZGQwYzJhXkEyXkFqcGdeQXVyMjA2Nzk2MDc@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "Mollie Miles",
      },
      {
        actor: "Josh Lucas",
        img:
          "https://m.media-amazon.com/images/M/MV5BM2I4NTgzYmQtZWFlYy00ZjNiLWJiNzQtNjlhZWJmMDk1MDNkXkEyXkFqcGdeQXVyMzYwNzUyOTM@._V1_UY44_CR6,0,32,44_AL_.jpg",
        role: "Leo Beebe",
      },
      {
        actor: "Noah Jupe",
        img:
          "https://m.media-amazon.com/images/M/MV5BODlmOTIzM2MtMTdiOS00OTQwLWI0NTYtOTcyYTNmNDcwYzQ1XkEyXkFqcGdeQXVyNDg1NDM0NDk@._V1_UY44_CR2,0,32,44_AL_.jpg",
        role: "Peter Miles",
      },
      {
        actor: "Tracy Letts",
        img:
          "https://m.media-amazon.com/images/M/MV5BNzQ4Mjc1NTU0OV5BMl5BanBnXkFtZTgwMTUxMjg0NzE@._V1_UY44_CR1,0,32,44_AL_.jpg",
        role: "Henry Ford II",
      },
      {
        actor: "Remo Girone",
        img:
          "https://m.media-amazon.com/images/M/MV5BYWNmYjM3MDYtYTZlNS00Mzc4LWI0ZGYtMjJjMzFmNmU1MWI2XkEyXkFqcGdeQXVyOTI5NzM0NTI@._V1_UY44_CR0,0,32,44_AL_.jpg",
        role: "Enzo Ferrari",
      },
      {
        actor: "Ray McKinnon",
        img:
          "https://m.media-amazon.com/images/M/MV5BMTkwNzEwMDg1NV5BMl5BanBnXkFtZTcwNDU1MDQ5OQ@@._V1_UY44_CR3,0,32,44_AL_.jpg",
        role: "Phil Remington",
      },
      {
        actor: "JJ Feild",
        img:
          "https://m.media-amazon.com/images/M/MV5BMjBjNWNmZDYtYjZjNy00NzdmLTg4NjEtZTRhOTIzNDI2NWI1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "Roy Lunn",
      },
      {
        actor: "Jack McMullen",
        img:
          "https://m.media-amazon.com/images/M/MV5BOThkMjAzYjItYzZjNi00NzQzLWEwMGYtOGM0YWI0ZjQ1MDQxXkEyXkFqcGdeQXVyMzkzNzUxMDM@._V1_UY44_CR17,0,32,44_AL_.jpg",
        role: "Charlie Agapiou",
      },
      {
        actor: "Corrado Invernizzi",
        img:
          "https://m.media-amazon.com/images/M/MV5BNTUxZDBmZTMtNTRlNS00OGQ3LWExN2QtNzlkMjYzOTI0ZjA1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "Franco Gozzi",
      },
      {
        actor: "Joe Williamson",
        img:
          "https://m.media-amazon.com/images/M/MV5BOTIyZjJiMzEtYmQxMi00ZjQ4LWI2NTMtMmRhYzcxZDA1M2RlXkEyXkFqcGdeQXVyNzY0MDUxNw@@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "Don Frey",
      },
      {
        actor: "Ian Harding",
        img:
          "https://m.media-amazon.com/images/M/MV5BMjExNTk4MzI0OV5BMl5BanBnXkFtZTgwODkzODE0MjE@._V1_UX32_CR0,0,32,44_AL_.jpg",
        role: "",
      },
    ],
    directors: ["James Mangold"],
    rating: "8.1/10",
    ratingCount: "263,626",
    metaScore: "81",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    overview:
      "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
  };

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
            source={{ uri: poster }}
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
            idbIcon={
              <IdbIcon rating={rating.split("/")[0]} {...{ ratingCount }} />
            }
            title="rate this"
            metaIcon={<MetaIcon rating={metaScore} />}
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
  size: 16,
};

export default MovieView;
