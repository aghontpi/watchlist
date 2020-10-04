import React from "react";
import { View } from "react-native";

import ListView from "./ListView";
import MovieView from "./MovieView";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <ListView />
    </View>
  );
};

export default index;
