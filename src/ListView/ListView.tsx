import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { ImdbSearchProps, searchIDB } from "../Api";

import { ListItem, ListItemProps, Search } from "./Components";

type ApiListItemProps = Omit<ListItemProps, "onPress">;

interface FlatListRenderProps {
  item: ApiListItemProps;
  index: number;
}

interface ListViewProps {}

const ListView = () => {
  const [api, setApi] = useState<ApiListItemProps[] | null>();
  setApi([
    {
      title: "Ford v Ferrari",
      actors: ["Christian Bale", "Matt Damon"],
      idbRating: "8.1",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    },
  ]);

  const ApiCall = ({ ...props }: ImdbSearchProps) => {
    setApi(null);
    searchIDB(props).then((v) => setApi(v));
  };

  return (
    <View style={{ flex: 1 }}>
      <Search SubmitSearch={(v) => ApiCall(v)} />
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <FlatList
          data={api}
          renderItem={({ item, index }: FlatListRenderProps) => (
            <ListItem
              key={index}
              onPress={() => {
                return true;
              }}
              {...item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ListView;
