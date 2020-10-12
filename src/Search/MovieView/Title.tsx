import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { RoundedIcon } from "../../Components";

interface TitleProps {
  title: string;
  genre: string[];
  runtime: string;
  release: string;
  certificate: string;
}

const Title = ({ title, genre, runtime, release, certificate }: TitleProps) => {
  const style = StyleSheet.create({
    genreButton: {
      borderRadius: 100,
      borderColor: "rgba(18,21,61,0.3)",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    genreStyleText: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      color: "#434670",
      fontSize: 16,
    },
  });

  return (
    <View>
      <View>
        <Text
          style={{ fontSize: 32, color: "rgba(18,21,61,1)", paddingRight: 64 }}
        >
          {title}
        </Text>
        <View
          style={{
            marginTop: 9,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "rgba(154,155,178,1)" }}>{release}</Text>
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
                key={v}
                style={
                  i !== 0
                    ? { marginLeft: 20, ...style.genreButton }
                    : style.genreButton
                }
              >
                <Text style={style.genreStyleText}>{v}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={{ position: "absolute", right: 0, top: 8, bottom: 0 }}>
        <RoundedIcon
          name="plus"
          iconRatio={0.3}
          backgroundColor="rgba(254,109,142,1)"
          size={64}
          color="white"
          borderRadius={20}
          onPress={() => true}
        />
      </View>
    </View>
  );
};

export default Title;
