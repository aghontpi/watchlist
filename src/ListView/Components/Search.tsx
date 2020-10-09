import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

import { ImdbSearchProps } from "../../Api";
import Header from "../../MovieView/Header";

const { width } = Dimensions.get("window");

interface SearchProps {
  SubmitSearch: (v: ImdbSearchProps) => void;
}

const Search = ({ SubmitSearch }: SearchProps) => {
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
        <View style={{}}>
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
          selectionColor="transparent"
          onSubmitEditing={({ nativeEvent: { text } }) => SubmitSearch(text)}
        />
      </View>
    </>
  );
};

export default Search;
