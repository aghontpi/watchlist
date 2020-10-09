import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

import Header from "../MovieView/Header";

import ListItem from "./ListItem";

interface ListViewProps {}

const { width } = Dimensions.get("window");

const ListView = () => {
  return (
    <View style={{ flex: 1 }}>
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
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item, index }) => (
            <ListItem
              key={index}
              onPress={() => {
                return true;
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ListView;
