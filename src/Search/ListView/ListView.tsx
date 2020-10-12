import React, { useContext, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { ImdbSearchProps, infoIDB, searchIDB } from "../../Api";
import { MovieInfoContext } from "../../Context";
import { MovieSearchInfoStackNavigationProps } from "../Search";

import { Search } from "./Components";
import ListItem, { ListItemProps } from "./ListItem";

type ApiListItemProps = Omit<ListItemProps, "onPress">;

interface FlatListRenderProps {
  item: ApiListItemProps;
  index: number;
}

const ListView = ({
  navigation,
}: MovieSearchInfoStackNavigationProps<"ListView">) => {
  const [api, setApi] = useState<ApiListItemProps[] | null>(null);

  const { setMovieInfo } = useContext(MovieInfoContext);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Search
            SubmitSearch={({ ...props }: ImdbSearchProps) => {
              searchIDB(props).then((v) =>
                setApi((prev) => {
                  return v.content !== prev ? v.content : prev;
                })
              );
            }}
          />
          <View style={{ flex: 1, marginTop: 40 }} />
        </>
      }
      data={api}
      renderItem={({ item, index }: FlatListRenderProps) => (
        <ListItem
          key={index}
          onPress={() => {
            if (!setMovieInfo) {
              return;
            }
            infoIDB({ ...item }).then((v) =>
              setMovieInfo((prev) => {
                navigation.navigate("MovieView");
                return v.content !== prev ? v.content : prev;
              })
            );
          }}
          {...item}
        />
      )}
    />
  );
};

export default ListView;
