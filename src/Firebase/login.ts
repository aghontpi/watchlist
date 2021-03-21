import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

const postLogin = async (
  uid: FirebaseAuthTypes.User["uid"],
  user: FirebaseAuthTypes.UserCredential
) => {
  if (uid) {
    try {
      const { email, photoURL, displayName } = user?.user;
      const updatelist = async () => {
        const listref = database().ref(`users-list/${uid}`);
        const snapshot = await listref.once("value");
        if (!(snapshot && snapshot.exists())) {
          const userlist = {
            email,
            photoURL,
            displayName,
          };
          listref.set(userlist, (err: Error) => {
            if (err) {
              console.error(`updating list-user for ${email} error`);
            }
            console.log("updated list user to the database");
          });
        }
      };

      const ref = database().ref(`users/${uid}`);
      const snapshot = await ref.once("value");
      if (!(snapshot && snapshot.exists())) {
        const payload = JSON.parse(JSON.stringify(user));
        ref.set(payload, async (err: Error) => {
          if (err) {
            console.error("updating user to database error");
          }
          console.log("updated user to the database");
          await updatelist();
        });
      } else {
        console.log("already existing user");
        await updatelist();
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export { postLogin as LoginCallback };
