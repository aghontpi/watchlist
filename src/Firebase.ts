import database, {
  FirebaseDatabaseTypes,
} from "@react-native-firebase/database";

import { MovieViewProps } from "./Home/Search/MovieView/MovieView";

interface Callback {
  success?: () => void;
  failure?: () => void;
}

interface BaseParams {
  callback: Callback;
}

const DatabaseReference = (uid: string): FirebaseDatabaseTypes.Reference => {
  const template = `lists/${uid}/`;
  return database().ref(template);
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

const callBackFn = ({
  success,
  failure,
  complete,
}: { complete: boolean } & Callback) => {
  complete ? success && success() : failure && failure();
};

type UpdateProps = { uid: string; item: MovieViewProps } & BaseParams;

const addToList = async ({ uid, item, callback }: UpdateProps) => {
  emptyCheck([
    { name: "uid", value: uid },
    { name: "item", value: item },
  ]);
  let ref = DatabaseReference(uid);
  let complete = null;

  try {
    ref = await ref.push(item);
    console.log(`wrote :'${ref.key}'`);
    complete = true;
  } catch (e) {
    console.error(e);
    complete = false;
  }

  callBackFn({ complete, ...callback });
};

const isMovieInList = async ({
  uid,
  name,
  callback,
}: { uid: string; name: string } & BaseParams) => {
  const status = emptyCheck([
    { name: "uid", value: uid },
    { name: "name", value: name },
  ]);

  if (!status) {
    return;
  }

  let snapshot, complete;
  const ref = DatabaseReference(uid);

  try {
    const query = ref.orderByChild("title").equalTo(name);
    snapshot = await query.once("value");
    if (snapshot.exists()) {
      console.log(`fetched :'${snapshot.ref.key}'`);
      complete = true;
    } else {
      console.log(`title : ${name} not found in user`);
      complete = false;
    }
  } catch (e) {
    console.error(e);
    complete = false;
  }

  const success = snapshot?.exists() ? callback.success : undefined;

  callBackFn({
    complete,
    ...callback,
    success,
  });
};

const myMovies = async (uid: string) => {
  if (uid) {
    const snapshot = await DatabaseReference(uid).ref.once("value");
    return snapshot.exists() ? JSON.stringify(snapshot.toJSON()) : null;
  }
  return null;
};

const removeFromList = async ({ uid, item, callback }: UpdateProps) => {
  emptyCheck([
    { name: "uid", value: uid },
    { name: "item", value: item },
  ]);
  const ref = DatabaseReference(uid);
  let complete = null;

  const { title } = item;
  try {
    const query = await ref.orderByChild("title").equalTo(title);
    const snapsnot = await query.once("value");
    if (snapsnot.exists()) {
      const autogenkeys = Object.keys(snapsnot.val());
      const update: { [key: string]: null } = {};
      for (const k in autogenkeys) {
        const v = autogenkeys[k];
        update[v] = null;
      }
      console.log(update);
      ref.update(update, () => {
        console.log(`removed ${update}`);
      });

      complete = true;
    } else {
      console.log(`provided title : ${title} not exists for rm`);
      complete = false;
    }
  } catch (e) {
    console.error(e);
    complete = false;
  }

  callBackFn({ complete, ...callback });
};
export {
  addToList as FirebasePushItem,
  isMovieInList as FirebaseIsInList,
  myMovies as FirebaseMyMovies,
  removeFromList as FirebaseRemoveItem,
};
