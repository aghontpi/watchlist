import { User } from "@react-native-community/google-signin";
import database from "@react-native-firebase/database";

import { MovieViewProps } from "./Search/MovieView/MovieView";

interface ItemDetails extends MovieViewProps {
  uniqueId: string;
}
interface Callback {
  success?: () => void;
  failure?: () => void;
}

interface AddToListParams {
  uid: User["user"]["id"];
  item: ItemDetails;
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

export { addToList as FirebasePushItem };
