import React, { createContext, ReactNode, useState } from "react";

import { MovieViewProps } from "./MovieView/MovieView";

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
  const [movieInfo, setMovieInfo] = useState<null | MovieViewProps>({
    image:
      "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    title: "American Made",
    overview:
      // eslint-disable-next-line max-len
      "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966",
    rating: { imdb: "8", rottenTomatoes: "7.8" },
    genre: ["action", "racing", "drama"],
    crew: {
      directors: ["James Mangold"],
      actors: "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe".split(
        ", "
      ),
    },
  });
  return (
    <MovieInfoContext.Provider value={{ movieInfo, setMovieInfo }}>
      {children}
    </MovieInfoContext.Provider>
  );
};
