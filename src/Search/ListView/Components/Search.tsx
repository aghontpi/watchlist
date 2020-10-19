import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { ImdbSearchProps } from "../../../Api";
import { FontType, Size, wWidth } from "../../../Components/StyleConstants";
import Header from "../../MovieView/Header";

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
      <View style={style.container}>
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
      <View style={style.searchContaier}>
        <View>
          <Text style={style.searchLabel}>SEARCH</Text>
        </View>
        <TextInput
          underlineColorAndroid="transparent"
          style={style.searchText}
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

const style = StyleSheet.create({
  container: {
    marginTop: Size.m,
    width: wWidth,
    height: 60,
    justifyContent: "flex-end",
  },
  searchContaier: {
    marginHorizontal: Size.xl,
    height: 85,
    borderBottomWidth: 2,
    borderBottomColor: "#EDEEEF",
  },
  searchLabel: {
    color: "#C1C4CD",
    fontSize: FontType.body - 6,
    letterSpacing: 0.8,
    fontWeight: "bold",
  },
  searchText: {
    flex: 1,
    fontSize: FontType.heading - 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default Search;
