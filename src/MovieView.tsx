import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import Api from "./Api";
import People from "./People";
import { RottenTomatoesSearch } from "./rottenTomatoes";
import RoundedIcon from "./RoundIcon";

interface CrewProps {
  directors: string[];
  actors: string[];
}

export interface MovieViewProps {
  image: ImageSourcePropType;
  title: string;
  overview: string;
  rating: { imdb: string; rottenTomatoes: string };
  genre: string[];
  crew: CrewProps;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const aspectRatio = 325 / 470;

const height = aspectRatio * wWidth;

const borderRadius = 64;

const ratingsBarHeight = 109;

const MovieView = ({ image, overview, genre, crew }: MovieViewProps) => {
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
        <View style={{}}>
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
          <Plot plot={overview} />
        </View>
        <View style={{ marginTop: 48 }}>
          <Crew directors={crew.directors} actors={crew.actors} />
        </View>
      </View>
    </View>
  );
};

const genreStyleText = {
  paddingVertical: 8,
  paddingHorizontal: 20,
  color: "#434670",
  fontSize: 16,
};

const genereButton = {
  borderRadius: 100,
  borderColor: "rgba(18,21,61,0.3)",
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

const Title = ({ title, genre, runtime, releasedYear, certificate }: props) => {
  const [api, setApi] = useState<RottenTomatoesSearch>();
  useEffect(() => {
    console.log(api?.status);
  }, [api]);
  return (
    <View>
      <View>
        <Text style={{ fontSize: 32, color: "rgba(18,21,61,1)" }}>{title}</Text>
        <View
          style={{
            marginTop: 9,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "rgba(154,155,178,1)" }}>{releasedYear}</Text>
          <Text style={{ marginLeft: 24, color: "rgba(154,155,178,1)" }}>
            {certificate}
          </Text>
          <Text style={{ marginLeft: 24, color: "rgba(154,155,178,1)" }}>
            {runtime}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <ScrollView bounces={true} horizontal={true}>
            {genre.map((v: string, i: number) => (
              <View
                key={i}
                style={
                  i !== 0 ? { marginLeft: 20, ...genereButton } : genereButton
                }
              >
                <Text style={genreStyleText}>{v}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{ position: "absolute", top: 0, right: 0 }}
        onTouchStart={() => {
          try {
            const response = Api();
            console.log(response);
            response.then((resp) => {
              setApi(resp);
            });
          } catch (e) {
            console.log("error", e);
            throw Error(e);
          }
        }}
      >
        <RoundedIcon
          name="plus"
          iconRatio={0.3}
          backgroundColor="rgba(254,109,142,1)"
          size={64}
          color="white"
          borderRadius={20}
        />
      </View>
    </View>
  );
};

const Plot = ({ plot }) => (
  <View>
    <Text style={{ fontSize: 24, color: "#12153D" }}>Plot</Text>
    <Text style={{ color: "#737599", fontSize: 16, marginTop: 16 }}>
      {plot}
    </Text>
  </View>
);

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
            directors.map((name, i) => (
              <People key={i} role="Director" {...{ name }} />
            ))}
          {actors &&
            actors.map((name, i) => (
              <View style={{ marginLeft: 30 }}>
                <People key={i} role="acting" {...{ name }} />
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  </View>
);

export default MovieView;
