import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { MyListInfoStackNavigationProps } from "../../../Components/Navigation";
import { MovieInfoContext, UserConext } from "../../../Context";
import { FirebaseMyMovies } from "../../../Firebase";
import { FirebaseMyListResponse } from "../../../TypeDefinitions/firebaseMyList.";
import ListItem from "../../Search/ListView/ListItem";
import { ApiListItemProps } from "../../Search/ListView/ListView";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
const dataReducer = (WholeData: string) => {
  const wholeList = (JSON.parse(
    WholeData
  ) as unknown) as FirebaseMyListResponse[];
  const limitedData = Object.values(wholeList).map(
    (value, _): ApiListItemProps => {
      const rtn = {
        cast: value.cast.map(({ actor }) => actor),
        title: value.title,
        idbRating: value.rating,
        poster: value.poster,
        id: (Math.random() * 100000).toString(),
      };
      return rtn;
    }
  );
  return limitedData;
};
const MyListView = ({
  navigation,
}: MyListInfoStackNavigationProps<"MyList">) => {
  // get logged in user from context
  const { state: user } = useContext(UserConext);
  const [api, setApiData] = useState<string | null>(null);
  const { movieInfo, setMovieInfo } = useContext(MovieInfoContext);
  const onPress = (item: ApiListItemProps) => {
    let value = null;
    if (item && api) {
      const tapi = JSON.parse(api);
      for (const k in tapi) {
        const v = tapi[k];
        if (v && v.title === item.title) {
          value = v;
        }
      }
      api && setMovieInfo && setMovieInfo(value);
      navigation.navigate("MovieView");
    }
  };

  useEffect(() => {
    movieInfo && navigation.navigate("MovieView");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieInfo]);

  useEffect(() => {
    if (user.user?.uid) {
      const { uid } = user.user;
      FirebaseMyMovies(uid).then((value) => {
        if (value !== null) {
          console.log("setting list", value.slice(0, 20));
          setApiData(value);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (api === null) {
    return <View />;
  }
  // reduce the whole dataset to only contain listItem required props
  const listViewData = dataReducer(api);
  return (
    <View style={style.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ flex: 1, marginTop: 40 }} />
          </>
        }
        data={listViewData}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            cached={true}
            onPress={() => onPress(item)}
            {...item}
          />
        )}
      />
    </View>
  );
};

export default MyListView;
