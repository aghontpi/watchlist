import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

import { ImdbSearchProps } from "../../../Api";
import Header from "../../MovieView/Header";

const { width } = Dimensions.get("window");

interface SearchProps {
  SubmitSearch: (v: ImdbSearchProps) => void;
}

const GetRandomDuringStart = () => {
  const startMovies: string[] = [
    "dark knight",
    "tenet",
    "potter",
    "fight club",
    "django",
    "inception",
    "interstellar",
    "predestin",
    "ninja assas",
    "iron man",
    "avengers",
    "end game",
  ];
  return startMovies[Math.floor(Math.random() * startMovies.length)];
};

const Search = ({ SubmitSearch }: SearchProps) => {
  const [search, setSearch] = useState(GetRandomDuringStart());
  useEffect(() => {
    SubmitSearch({ title: search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <View
        style={{
          marginTop: 16,
          width,
          height: 60,
          justifyContent: "flex-end",
        }}
      >
        <Header
          right={{
            icon: {
              name: "filter",
              color: "black",
              backgroundColor: "#F6F7F9",
            },
            onPress: () => true,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 32,
          height: 85,
          borderBottomWidth: 2,
          borderBottomColor: "#EDEEEF",
        }}
      >
        <View>
          <Text
            style={{
              color: "#C1C4CD",
              fontSize: 10,
              letterSpacing: 0.8,
              fontWeight: "bold",
            }}
          >
            SEARCH
          </Text>
        </View>
        <TextInput
          underlineColorAndroid="transparent"
          style={{ flex: 1, fontSize: 30, color: "black", fontWeight: "bold" }}
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          selectionColor="black"
          value={search}
          onChangeText={(v: string) => setSearch(v)}
          onSubmitEditing={({ nativeEvent: { text } }) =>
            SubmitSearch({ title: text })
          }
        />
      </View>
    </>
  );
};

export default Search;
