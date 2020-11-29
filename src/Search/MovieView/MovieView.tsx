import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import {
  FontType,
  Size,
  wHeight,
  wWidth,
} from "../../Components/StyleConstants";
import { MovieInfoContext, UserConext } from "../../Context";
import { FirebaseIsInList, FirebasePushItem } from "../../Firebase";

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

const aspectRatio = 325 / 470;
const height = aspectRatio * wWidth;
const borderRadius = Size.xl * 2;
const ratingsBarHeight = 109;

const posterConversion = (imgSrc: string): string => {
  return imgSrc ? imgSrc.slice(0, imgSrc.indexOf("_V1")) + "_SY720_.jpg" : "";
};

const MovieView = () => {
  const { movieInfo } = useContext(MovieInfoContext);
  const { state: user } = useContext(UserConext);

  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    if (movieInfo && user.user?.uid) {
      const { uid } = user.user;
      const name = movieInfo.title;

      FirebaseIsInList({
        uid,
        name,
        callback: {
          success: () => setBtnActive(true),
        },
      });
    }
  }, [movieInfo, user, user.user]);

  const addBtn = () => {
    if (!user.user?.uid || !movieInfo) {
      return;
    }
    const { uid } = user.user;
    const item = movieInfo;

    FirebasePushItem({
      uid,
      item,
      callback: {
        success: () => setBtnActive(true),
      },
    });
  };

  if (!movieInfo) {
    return <Text>unable to fetch movie</Text>;
  }

  const {
    genre,
    certificate,
    runtime,
    release,
    title,
    cast,
    // directors,
    rating,
    ratingCount,
    metaScore,
    poster,
    overview,
    metaCriticCount,
  } = movieInfo;

  return (
    <View style={style.container}>
      <View style={{ height: height, width: wWidth }}>
        <View style={style.imgContainer} />
        <View style={[StyleSheet.absoluteFillObject, style.imgBackGround]}>
          <ImageBackground
            source={{ uri: posterConversion(poster) }}
            resizeMode="cover"
            style={style.img}
          />
        </View>
      </View>
      <View style={style.ratingsBar}>
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
      <View style={[StyleSheet.absoluteFillObject, style.restOfInfo]}>
        <Title
          {...{ title, genre, runtime, release, certificate }}
          addBtn={{ onPress: addBtn, active: btnActive }}
        />
        <View style={{ marginTop: Size.xxl + Size.s }}>
          <View>
            <Text style={style.plot}>Plot</Text>
            <Text style={style.overView}>{overview}</Text>
          </View>
        </View>
        <View style={{ marginTop: Size.xxl + Size.s }}>
          <Crew actors={cast} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  imgContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imgBackGround: {
    backgroundColor: "rgba(100,100,200,0.5)",
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    overflow: "hidden",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: undefined,
    height: undefined,
  },
  ratingsBar: {
    position: "absolute",
    top: height - ratingsBarHeight / 2,
    height: ratingsBarHeight,
    right: 0,
    borderTopLeftRadius: Size.xxl + 10,
    borderBottomLeftRadius: Size.xxl + 10,
    width: wWidth * 0.9,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: Size.xxl * 2,
  },
  restOfInfo: {
    height: wHeight - (height + ratingsBarHeight / 2),
    flex: 1,
    top: undefined,
    backgroundColor: "white",
    marginHorizontal: Size.xl,
  },
  plot: { fontSize: FontType.heading1, color: "#12153D" },
  overView: { color: "#737599", fontSize: FontType.body, marginTop: Size.m },
});

export default MovieView;
