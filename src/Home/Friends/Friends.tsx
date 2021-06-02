import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Size, wWidth } from "../../Components/StyleConstants";
import { UserConext } from "../../Context";
import { FriendRequest, ListUsers } from "../../Firebase";
import { getFriendsCurrentUser, FriendType } from "../../Firebase/friends";

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
  const [friends, setFriends] = useState<Map<string, FriendType["status"]>>();

  const {
    state: { user },
  } = useContext(UserConext);

  useEffect(() => {
    // friends list
    if (user?.uid) {
      getFriendsCurrentUser(user.uid).then((response) => {
        if (response) {
          const _friends = (Object.values(response) as unknown) as FriendType[];
          const friendsMap = new Map<string, FriendType["status"]>();
          for (let i = 0; i < _friends.length; i++) {
            friendsMap.set(_friends[i].userid, _friends[i].status);
            setFriends(friendsMap);
          }
        }
      });
    }

    // existing users list
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
            userIds &&
            users.map(({ email, photoURL, displayName }, key) => {
              if (userIds[key] === user?.uid) {
                return null;
              }
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
                  active={
                    friends ? friends.get(userIds[key]) === "requested" : false
                  }
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
