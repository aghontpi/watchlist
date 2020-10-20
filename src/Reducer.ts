import { FirebaseAuthTypes } from "@react-native-firebase/auth";

// typechecking https://redux.js.org/recipes/usage-with-typescript
// One step away from creating redux store, everything is implemented except
//  create store and using the store in provider, didnt want to install redux dependency yet
//  thus using context api

export type User = FirebaseAuthTypes.User | null;

export type UserState = {
  user: User;
  err?: string;
};

const initialState: UserState = {
  user: null,
};

export { initialState as userInitialState };

// TODO: move to seperate file as recommended in https://redux.js.org/recipes/usage-with-typescript

export const USER_LOGIN = "LOGIN";
const USER_LOGOUT = "LOGOUT";
const USER_UPDATE = "UPDATE";

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
  console.log("login action creator");
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

type UserReducer<State, Action> = (state: State, action: Action) => State;

export const UserReducer: UserReducer<UserState, UserActionTypes> = (
  state = initialState,
  action
) => {
  console.log("reducer:", "state", state, "action", action);
  // currently redux is not being used thus, context inital state workaround
  if (!action.type) {
    return state;
  }
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.info,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };

    case USER_UPDATE:
      console.log("implement update");
      return state;
  }
};
