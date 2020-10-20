import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from "react";

import {
  UserActionTypes,
  userInitialState,
  UserReducer,
  UserState,
} from "./Reducer";
import { MovieViewProps } from "./Search/MovieView/MovieView";

type ContextProps = {
  children: ReactNode;
};

interface MovieInfoContextProps {
  movieInfo: MovieViewProps | null;
  setMovieInfo?: Dispatch<SetStateAction<MovieViewProps | null>>;
}

export const MovieInfoContext = createContext<MovieInfoContextProps>({
  movieInfo: null,
});

export const MovieInfoContextProvider = ({ children }: ContextProps) => {
  const [movieInfo, setMovieInfo] = useState<null | MovieViewProps>(null);
  return (
    <MovieInfoContext.Provider value={{ movieInfo, setMovieInfo }}>
      {children}
    </MovieInfoContext.Provider>
  );
};

// One step away from creating redux store, everything is implemented except
//  create store and using the store in provider, dont want to install redux dependency yet
//  thus using context api

type UserContext = {
  state: UserState;
  dispatch: Dispatch<UserActionTypes>;
};

export const UserConext = createContext<UserContext>({
  state: userInitialState,
  dispatch: () => true,
});

export const UserInfoProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, userInitialState);
  return (
    <UserConext.Provider value={{ state, dispatch }}>
      {children}
    </UserConext.Provider>
  );
};
