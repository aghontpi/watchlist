import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Rating from "./Rating";

export interface ListItemProps {
  onPress: () => void;
  idbRating: string;
  rtRating?: string;
  title: string;
  actors: string[];
  poster: string;
}

const ListItem = ({
  onPress,
  idbRating,
  title,
  actors,
  poster,
}: ListItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PLACEHOLDER_IMAGE = require("../assests/poster_small.jpg");
  return (
    <RectButton
      {...{ onPress }}
      style={{ height: 172, flex: 1, marginBottom: 24 }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          marginRight: 32,
        }}
      >
        <View
          style={{
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            overflow: "hidden",
            width: 164,
            height: 172,
          }}
        >
          <ImageBackground
            source={poster ? { uri: poster } : PLACEHOLDER_IMAGE}
            style={{ flex: 1, width: undefined, height: undefined }}
            imageStyle={{ resizeMode: "cover" }}
          />
        </View>
        <View
          style={{
            marginLeft: 24,
            flexDirection: "column",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Rating heartOnPress={() => true} {...{ idbRating }} />
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 8 }}>
              {title}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 8 }}>
            {actors &&
              actors.map((v, i) => (
                <Text key={v} style={{ fontSize: 16, color: "#737599" }}>
                  {i !== 0 && ", "}
                  {v}
                </Text>
              ))}
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default ListItem;
