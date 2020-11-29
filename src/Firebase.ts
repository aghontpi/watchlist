import database, {
  FirebaseDatabaseTypes,
} from "@react-native-firebase/database";

import { MovieViewProps } from "./Search/MovieView/MovieView";

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

const addToList = async ({
  uid,
  item,
  callback,
}: { uid: string; item: MovieViewProps } & BaseParams) => {
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
    console.log(`fetched :'${query.ref.key}'`);
    complete = true;
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

export { addToList as FirebasePushItem, isMovieInList as FirebaseIsInList };
