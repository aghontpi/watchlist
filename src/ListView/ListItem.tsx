import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Rating from "./Components/Rating";

export interface ListItemProps {
  onPress: () => void;
  idbRating: string;
  rtRating?: string;
  title: string;
  cast: string[];
  poster: string;
  id: string;
}

const ListItem = ({
  onPress,
  idbRating,
  title,
  cast,
  poster,
}: ListItemProps) => {
  return (
    <RectButton
      {...{ onPress }}
      style={{ height: 172, flex: 1, marginBottom: 24 }}
      key={title}
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
            width: 172,
            height: 172,
          }}
        >
          <ImageBackground
            source={
              poster
                ? { uri: poster }
                : { uri: "https://picsum.photos/172/172" }
            }
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
              {title.length < 37 ? title : title.slice(0, 34) + ".."}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 8 }}>
            {cast &&
              cast.map((v, i) => (
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
