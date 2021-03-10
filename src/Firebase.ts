import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import database, {
  FirebaseDatabaseTypes,
} from "@react-native-firebase/database";

import { MovieViewProps } from "./Home/Search/MovieView/MovieView";

const ENABLE_FIREBASE_DEBUG = true;
interface Callback {
  success?: () => void;
  failure?: () => void;
}
const callBackFn = ({
  success,
  failure,
  complete,
}: { complete: boolean } & Callback) =>
  complete ? success && success() : failure && failure();

const log = (msg: string) => ENABLE_FIREBASE_DEBUG && console.log(msg);

const DatabaseReference = (
  uid: string
): FirebaseDatabaseTypes.Reference | undefined => {
  const template = `lists/${uid}/`;
  try {
    return database().ref(template);
  } catch (e) {
    console.error(`unable to connect firebase, ref : ${template}`);
  }
};

const emptyCheck = (items: { name: string; value: unknown }[]) => {
  let check = true;
  items.map(({ value, name }) => {
    if (!value || (typeof value === "string" && !value.trim())) {
      console.error(`${name} provided is not valid.`);
      check = false;
    }
  });
  return check;
};

type UpdateProps = {
  uid: string;
  item: MovieViewProps;
  type: "add" | "remove" | "contains";
  callback: Callback;
};

const performAction = async ({ uid, item, type, callback }: UpdateProps) => {
  const { title } = item;
  // whether passes params are valid
  if (
    !emptyCheck([
      { name: "uid", value: uid },
      { name: "name", value: title },
    ])
  ) {
    return;
  }

  let ref = DatabaseReference(uid);
  let complete = false,
    snapshot = null;

  // connection to firebase error
  if (!ref) {
    return;
  }

  try {
    const query = await ref.orderByChild("title").equalTo(title);
    snapshot = await query.once("value");
  } catch (e) {
    console.error("unable to query from firebase", console.trace());
  }

  switch (type) {
    case "remove":
      try {
        if (snapshot && snapshot.exists()) {
          const autogenkeys = Object.keys(snapshot.val());
          const update: { [key: string]: null } = {};
          for (const k in autogenkeys) {
            const v = autogenkeys[k];
            update[v] = null;
          }
          ref.update(update, () => {
            log(`removed ${Object.keys(update)}`);
          });
          complete = true;
        } else {
          log(`provided title : ${title} not exists for rm`);
          complete = false;
        }
      } catch (e) {
        console.error(e);
        complete = false;
      }
      break;
    case "add":
      try {
        ref = await ref.push(item);
        console.log(`wrote :'${ref.key}'`);
        complete = true;
      } catch (e) {
        console.error(e);
        complete = false;
      }
      break;
    case "contains":
      try {
        if (snapshot && snapshot.exists()) {
          log(`fetched :'${snapshot.ref.key}'`);
          complete = true;
        } else {
          log(`title : ${title} not found in user`);
          complete = false;
        }
      } catch (e) {
        console.error(e);
        complete = false;
      }
      break;

    default:
      console.error(`invalid value provided: ${type}`);
  }

  callBackFn({ complete, ...callback });
};

const myMovies = async (uid: string) => {
  if (uid) {
    const snapshot = await DatabaseReference(uid)?.ref.once("value");
    return snapshot && snapshot.exists()
      ? JSON.stringify(snapshot.toJSON())
      : null;
  }
  return null;
};

const postLogin = async (
  uid: FirebaseAuthTypes.User["uid"],
  user: FirebaseAuthTypes.UserCredential
) => {
  if (uid) {
    try {
      const ref = database().ref(`users/${uid}`);
      const snapshot = await ref.once("value");
      if (!(snapshot && snapshot.exists())) {
        const payload = JSON.parse(JSON.stringify(user));
        ref.set(payload, (err: Error) => {
          if (err) {
            console.error("updating user to database error");
          }
          console.log("updated user to the database");
        });
      } else {
        console.log("already existing user");
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export { myMovies as FirebaseMyMovies, performAction };
export { postLogin as LoginCallback };
