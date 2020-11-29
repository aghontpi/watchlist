import { User } from "@react-native-community/google-signin";
import database from "@react-native-firebase/database";

import { MovieViewProps } from "./Search/MovieView/MovieView";

interface Callback {
  success?: () => void;
  failure?: () => void;
}

interface AddToListParams {
  uid: User["user"]["id"];
  item: MovieViewProps;
  callback?: Callback;
}

const addToList = async ({ uid, item, callback }: AddToListParams) => {
  if (!uid || !uid.trim()) {
    console.error("uid provided is not valid.");
    return false;
  }
  if (!item) {
    console.error("item provided is not valid");
    return false;
  }
  const template = `lists/${uid}/`;
  let ref = database().ref(template);
  let complete = null;
  try {
    ref = await ref.push(item);
    console.log(`wrote :'${ref.key}'`);
    complete = true;
  } catch (e) {
    console.error(e);
    complete = false;
  }

  if (callback) {
    complete
      ? callback.success && callback.success()
      : callback.failure && callback.failure();
  }
};

interface IsMovieInListParams {
  uid: string;
  name: string;
  callback: Callback;
}

const isMovieInList = async ({ uid, name, callback }: IsMovieInListParams) => {
  if (!uid || !uid.trim()) {
    console.error("uid provided is not valid.");
    return false;
  }
  if (!name) {
    console.error("name provided is not valid");
    return false;
  }

  const template = `lists/${uid}/`;
  let snapshot, complete;
  try {
    const query = database().ref(template).orderByChild("title").equalTo(name);
    snapshot = await query.once("value");
    console.log(`fetched :'${query.ref.key}'`);
    complete = true;
  } catch (e) {
    console.error(e);
    complete = false;
  }

  if (callback) {
    complete
      ? snapshot?.exists() && callback.success && callback.success()
      : callback.failure && callback.failure();
  }
};

export { addToList as FirebasePushItem, isMovieInList as FirebaseIsInList };
