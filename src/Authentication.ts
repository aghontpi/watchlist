import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";

GoogleSignin.configure({
  webClientId:
    "1092778736836-j44ga0bape99ctlhbrc18b6pq3v39jq5.apps.googleusercontent.com",
});

export const onGoogleButtonPress = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};
