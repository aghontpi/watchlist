import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Size, wWidth } from "../../Components/StyleConstants";

import Person from "./Person";
import TabbledView from "./TabbedView";

const Friends = () => {
  return (
    <TabbledView
      tabOne={
        <ScrollView
          style={{
            flex: 1,
            width: wWidth - Size.m * 2,
            marginHorizontal: Size.m,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </ScrollView>
      }
      tabTwo={
        <ScrollView style={{ flex: 1, marginHorizontal: Size.m }}>
          <Person />
        </ScrollView>
      }
    />
  );
};

export default Friends;
