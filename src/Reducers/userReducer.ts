import {
  initialState,
  UserActionTypes,
  UserState,
  USER_LOGIN,
  USER_LOGOUT,
  USER_UPDATE,
} from "../Actions";

type UserReducer<State, Action> = (state: State, action: Action) => State;

export const UserReducer: UserReducer<UserState, UserActionTypes> = (
  state = initialState,
  action
) => {
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
