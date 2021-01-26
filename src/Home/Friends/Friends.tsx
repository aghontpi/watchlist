import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import Person from "./Person";

const Friends = () => {
  return (
    <ScrollView>
      <Person />
      <Person />
      <Person />
    </ScrollView>
  );
};

export default Friends;
