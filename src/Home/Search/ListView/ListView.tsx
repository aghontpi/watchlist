import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { ImdbSearchProps, infoIDB, searchIDB } from "../../../Api";
import { MovieSearchInfoStackNavigationProps } from "../../../Components/Navigation";
import { MovieInfoContext } from "../../../Context";

import { Search } from "./Components";
import ListItem, { ListItemProps } from "./ListItem";

export type ApiListItemProps = Omit<ListItemProps, "onPress">;

interface FlatListRenderProps {
  item: ApiListItemProps;
  index: number;
}

const ListView = ({
  navigation,
}: MovieSearchInfoStackNavigationProps<"ListView">) => {
  const [api, setApi] = useState<ApiListItemProps[] | null>(null);
  const { movieInfo, setMovieInfo } = useContext(MovieInfoContext);

  /** sideeffect of api call, nrcessary, since movieInfo context is
   * inside drawerNavigation */
  useEffect(() => {
    movieInfo && navigation.navigate("MovieView");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieInfo]);

  const SubmitSearch = ({ ...props }: ImdbSearchProps) => {
    searchIDB(props).then((v) =>
      setApi((prev) => (v.content !== prev ? v.content : prev))
    );
  };

  const OnPress = (item: ApiListItemProps) => {
    setMovieInfo &&
      infoIDB({ ...item }).then((v) =>
        setMovieInfo((prev) => (v.content !== prev ? v.content : prev))
      );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Search {...{ SubmitSearch }} />
          <View style={{ flex: 1, marginTop: 40 }} />
        </>
      }
      data={api}
      renderItem={({ item, index }: FlatListRenderProps) => (
        <ListItem key={index} onPress={() => OnPress(item)} {...item} />
      )}
    />
  );
};

export default ListView;
