import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { UserConext } from "../../Context";
import { FirebaseMyMovies } from "../../Firebase";
import { FirebaseMyListResponse } from "../../TypeDefinitions/firebaseMyList.";
import ListItem from "../Search/ListView/ListItem";
import { ApiListItemProps } from "../Search/ListView/ListView";

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
const MyList = () => {
  // get logged in user from context
  const { state: user } = useContext(UserConext);
  const [api, setApiData] = useState<string | null>(null);

  useEffect(() => {
    if (user.user?.uid) {
      const { uid } = user.user;
      FirebaseMyMovies(uid).then((value) => {
        if (value !== null) {
          console.log("setting list", value);
          setApiData(value);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (api === null) {
    return false;
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
          <ListItem key={index} onPress={() => true} {...item} />
        )}
      />
    </View>
  );
};

export default MyList;
