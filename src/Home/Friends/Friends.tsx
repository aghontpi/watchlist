import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Size } from "../../Components/StyleConstants";

import Person from "./Person";

const Friends = () => {
  return (
    <ScrollView style={{ flex: 1, marginHorizontal: Size.m }}>
      <Person />
      <Person />
      <Person />
    </ScrollView>
  );
};

export default Friends;
