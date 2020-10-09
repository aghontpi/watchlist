import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

import Header from "../MovieView/Header";

import ListItem, { ListItemProps } from "./ListItem";

type ApiListItemProps = Omit<ListItemProps, "onPress">;

interface FlatListRenderProps {
  item: ApiListItemProps;
  index: number;
}

interface ListViewProps {}

const { width } = Dimensions.get("window");

const ListView = () => {
  const [api, setApi] = useState<ApiListItemProps[]>([
    {
      title: "Ford v Ferrari",
      actors: ["Christian Bale", "Matt Damon"],
      idbRating: "8.1",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    },
  ]);

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
          data={api}
          renderItem={({ item, index }: FlatListRenderProps) => (
            <ListItem
              key={index}
              onPress={() => {
                return true;
              }}
              {...item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ListView;
