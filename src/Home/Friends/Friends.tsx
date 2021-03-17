import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Size, wWidth } from "../../Components/StyleConstants";
import { UserConext } from "../../Context";
import { FriendRequest, ListUsers } from "../../Firebase";

import Person from "./Person";
import TabbledView from "./TabbedView";

interface ListUsersF {
  displayName: string;
  email: string;
  photoURL: string;
}

const Friends = () => {
  const [users, setUsers] = useState<ListUsersF[]>();
  const [userIds, setUserIds] = useState<string[]>();
  const {
    state: { user },
  } = useContext(UserConext);

  useEffect(() => {
    ListUsers().then((response) => {
      if (response) {
        // TODO: taking keys and values sepeartely, make it consice
        const usersIds = Object.keys(response);
        setUserIds(usersIds);
        const usersList: ListUsersF[] = Object.values(response);
        console.log("fetched", usersList);
        setUsers(usersList);
      }
    });
  }, []);
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
          showsHorizontalScrollIndicator={false}
        >
          {users &&
            users.map(({ email, photoURL, displayName }, key) => {
              return (
                <Person
                  key={key}
                  email={email}
                  photo={photoURL}
                  name={displayName}
                  buttonPress={() => {
                    if (user?.uid && userIds) {
                      console.log("requesting", user.uid, userIds[key]);
                      FriendRequest(user.uid, userIds[key]);
                    } else {
                      console.error("either user or userids are empty");
                    }
                  }}
                  active={false}
                />
              );
            })}
        </ScrollView>
      }
      tabTwo={
        <ScrollView
          style={{
            flex: 1,
            width: wWidth - Size.m * 2,
            marginHorizontal: Size.m,
          }}
        />
      }
    />
  );
};

export default Friends;
