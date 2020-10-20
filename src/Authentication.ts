import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

export const configureGoogle = () => {
  GoogleSignin.configure({
    webClientId:
      "1092778736836-3t6la0uptqg3d2hpfii3gmd8tmkrhbvd.apps.googleusercontent.com",
  });
};

export const onGoogleButtonPress = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const signInResult = auth().signInWithCredential(googleCredential);
    return signInResult;
  } catch (err) {
    // TODO: configure and trigger error collection
    switch (err.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        console.log("signIn calcelled");
        break;
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        console.log("google PlayService Not available");
        break;
      default:
        console.log("SignIn error", err);
    }
  }
};

export const logout = async () => {
  try {
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (err) {
    console.error("logout", err);
  }
};
