import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Size, wWidth } from "../../Components/StyleConstants";
import { ListUsers } from "../../Firebase";

import Person from "./Person";
import TabbledView from "./TabbedView";

interface ListUsersF {
  displayName: string;
  email: string;
  photoURL: string;
}

const Friends = () => {
  const [users, setUsers] = useState<ListUsersF[]>();
  useEffect(() => {
    ListUsers().then((response) => {
      const usersList: ListUsersF[] = Object.values(response);
      console.log("fetched", usersList);
      setUsers(usersList);
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
            users.map((user, key) => {
              return (
                <Person
                  key={key}
                  email={user.email}
                  photo={user.photoURL}
                  name={user.displayName}
                  buttonPress={() => true}
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
