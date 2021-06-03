import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

export interface FriendType {
  userid: FirebaseAuthTypes.User["uid"];
  status: "requested" | "friends";
  friendSince: ReturnType<typeof Date.now>;
}

const addPerson = async (
  uid: FirebaseAuthTypes.User["uid"],
  requestingPerson: FirebaseAuthTypes.User["uid"]
) => {
  const requestingUser = await database()
    .ref(`users/${uid}/friends/`)
    .orderByChild("userid")
    .equalTo(requestingPerson)
    .once("value");

  if (!(requestingUser && requestingUser.exists())) {
    const payload: FriendType = {
      userid: requestingPerson,
      status: "requested",
      friendSince: Date.now(),
    };
    database()
      .ref(`users/${uid}/friends`)
      .push(payload, (err: Error) => {
        if (err) {
          console.error(`error adding request for user ${requestingPerson}`);
        } else {
          console.log(`added user request to user ${uid}`);
        }
      });
  } else {
    console.log("already an existing request exists");
  }
};

const getUsers = async () => {
  const _listUsers = await database()
    .ref("users-list/")
    .orderByKey()
    .once("value");
  console.log(_listUsers.val());
  return _listUsers.toJSON();
};

interface QueryUsers {
  query?: string;
}

const queryUsers = async ({ query }: QueryUsers) => {
  if (query) {
    //todo: firebase does not support like operations, find an alternate
    const _users = await database()
      .ref("users-list")
      .orderByChild("displayName")
      .startAt(query)
      .endAt(`${query}\uF7FF`)
      .once("value");
    console.log("query fb", _users);
    return _users.toJSON();
  }
};

// security: based on firebase rules set, this is accessible only for the logged in user
const getFriendsCurrentUser = async (uid: FirebaseAuthTypes.User["uid"]) => {
  const friends = await database()
    .ref(`users/${uid}/friends/`)
    .orderByChild("userid")
    .once("value");
  return (
    friends &&
    friends.exists() &&
    ((friends.toJSON() as unknown) as { string: FriendType }[])
  );
};
export {
  addPerson as FriendRequest,
  getUsers as ListUsers,
  queryUsers,
  getFriendsCurrentUser,
};
