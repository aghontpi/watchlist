import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

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
    const payload = {
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
export { addPerson as FriendRequest, getUsers as ListUsers };
