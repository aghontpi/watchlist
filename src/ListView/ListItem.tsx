import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ListItemProps {
  onPress: () => void;
}

const ListItem = ({ onPress }: ListItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PLACEHOLDER_IMAGE = require("../assests/poster_small.jpg");
  return (
    <RectButton {...{ onPress }} style={{ height: 180, flex: 1 }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View
          style={{
            borderRadius: 40,
            overflow: "hidden",
            width: 164,
            height: 172,
          }}
        >
          <ImageBackground
            source={PLACEHOLDER_IMAGE}
            style={{ flex: 1, width: undefined, height: undefined }}
            imageStyle={{ resizeMode: "cover" }}
          />
        </View>
        <View style={{ marginLeft: 24, flexDirection: "column" }}>
          <View style={{ flexDirection: "column" }}>
            <Text>ratings here</Text>
          </View>
          <View>
            <Text>Title of the movie here</Text>
          </View>

          <View>
            <Text> actors here</Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default ListItem;
