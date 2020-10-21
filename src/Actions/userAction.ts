import { FirebaseAuthTypes } from "@react-native-firebase/auth";

// typechecking https://redux.js.org/recipes/usage-with-typescript
// I could use redux here. dont want its dependency yet.

export type User = FirebaseAuthTypes.User | null;

export type UserState = {
  user: User;
  err?: string;
};

export const initialState: UserState = {
  user: null,
};

export { initialState as userInitialState };

const USER_LOGIN = "LOGIN";
const USER_LOGOUT = "LOGOUT";
const USER_UPDATE = "UPDATE";

export { USER_LOGOUT, USER_LOGIN, USER_UPDATE };

interface LoginUser {
  type: typeof USER_LOGIN;
  info: User;
}

interface LogoutUser {
  type: typeof USER_LOGOUT;
}

interface UpdateUser {
  type: typeof USER_UPDATE;
}

export type UserActionTypes = LoginUser | LogoutUser | UpdateUser;

export const LoginUser = (info: User): UserActionTypes => {
  return {
    type: USER_LOGIN,
    info: info,
  };
};

export const LogoutUser = (): UserActionTypes => {
  return {
    type: USER_LOGOUT,
  };
};
