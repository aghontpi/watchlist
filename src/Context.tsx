import React, { createContext, ReactNode, useState } from "react";

import { MovieViewProps } from "./Search/MovieView/MovieView";

interface MovieInfoContextProps {
  movieInfo: MovieViewProps | null;
  setMovieInfo?: React.Dispatch<React.SetStateAction<MovieViewProps | null>>;
}

export const MovieInfoContext = createContext<MovieInfoContextProps>({
  movieInfo: null,
});

export const MovieInfoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [movieInfo, setMovieInfo] = useState<null | MovieViewProps>(null);
  return (
    <MovieInfoContext.Provider value={{ movieInfo, setMovieInfo }}>
      {children}
    </MovieInfoContext.Provider>
  );
};
