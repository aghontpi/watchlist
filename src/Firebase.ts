import { User } from "@react-native-community/google-signin";
import database from "@react-native-firebase/database";

import { MovieViewProps } from "./Search/MovieView/MovieView";

interface ItemDetails extends MovieViewProps {
  uniqueId: string;
}

interface AddToListParams {
  uid: User["user"]["id"];
  item: ItemDetails;
}

const addToList = ({ uid, item }: AddToListParams) => {
  if (!uid || !uid.trim()) {
    console.error("uid provided is not valid.");
    return false;
  }
  if (!item) {
    console.error("item provided is not valid");
    return false;
  }
  const template = `lists/${uid}/`;
  const newRef = database().ref(template).push(item);
  console.log(`wrote :'${newRef.key}'`);
};

export { addToList as FirebasePushItem };
