import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../Search/ListView/ListItem";
import { ApiListItemProps } from "../Search/ListView/ListView";

import { dummyData as wholeData } from "./dummyData";
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
const MyList = () => {
  const limitedData = Object.values(wholeData).map(
    (value, _): ApiListItemProps => {
      const rtn = {
        cast: value.cast.map(({ actor }) => actor),
        title: value.title,
        idbRating: value.rating,
        poster: value.poster,
        id: (Math.random() * 100000).toString(),
      };
      return rtn;
    }
  );
  const api = limitedData;

  return (
    <View style={style.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ flex: 1, marginTop: 40 }} />
          </>
        }
        data={api}
        renderItem={({ item, index }) => (
          <ListItem key={index} onPress={() => true} {...item} />
        )}
      />
    </View>
  );
};

export default MyList;
