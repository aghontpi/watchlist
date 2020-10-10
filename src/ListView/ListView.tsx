import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { ImdbSearchProps, searchIDB } from "../Api";
import { AfterLoginNavigationProp } from "../Components/Navigation";

import { Search } from "./Components";
import ListItem, { ListItemProps } from "./ListItem";

type ApiListItemProps = Omit<ListItemProps, "onPress">;

interface FlatListRenderProps {
  item: ApiListItemProps;
  index: number;
}

const ListView = ({ navigation }: AfterLoginNavigationProp<"MovieSearch">) => {
  const [api, setApi] = useState<ApiListItemProps[] | null>([
    {
      title: "Ford v Ferrari",
      cast: ["Christian Bale", "Matt Damon"],
      idbRating: "8.1",
      poster:
        // eslint-disable-next-line max-len
        "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    },
  ]);

  const ApiCall = ({ ...props }: ImdbSearchProps) => {
    searchIDB(props).then((v) =>
      setApi((prev) => {
        return v.content !== prev ? v.content : prev;
      })
    );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Search SubmitSearch={(v) => ApiCall(v)} />
          <View
            style={{
              flex: 1,
              marginTop: 40,
            }}
          />
        </>
      }
      data={api}
      renderItem={({ item, index }: FlatListRenderProps) => (
        <ListItem
          key={index}
          onPress={() => {
            navigation.navigate("MovieView");
          }}
          {...item}
        />
      )}
    />
  );
};

export default ListView;
