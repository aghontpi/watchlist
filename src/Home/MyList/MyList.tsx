import React from "react";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
const MyList = () => {
  return (
    <View style={style.container}>
      <Text>My List</Text>
    </View>
  );
};

export default MyList;
