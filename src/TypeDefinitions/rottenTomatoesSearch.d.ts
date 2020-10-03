/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
export interface Searchrt {
  status: string;
  content: Content;
}

export interface Content {
  total: number;
  movies: Movie[];
  links: ContentLinks;
  link_template: string;
}

export interface ContentLinks {
  self: string;
  next: string;
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  mpaa_rating: string;
  runtime: number;
  critics_consensus?: string;
  release_dates: ReleaseDates;
  ratings: Ratings;
  synopsis: string;
  posters: Posters;
  abridged_cast: AbridgedCast[];
  links: MovieLinks;
}

export interface AbridgedCast {
  name: string;
  id: string;
  characters?: string[];
}

export interface MovieLinks {
  self: string;
  alternate: string;
  cast: string;
  reviews: string;
  similar: string;
}

export interface Posters {
  thumbnail: string;
  profile: string;
  detailed: string;
  original: string;
}

export interface Ratings {
  critics_rating?: string;
  critics_score: number;
  audience_rating: string;
  audience_score: number;
}

export interface ReleaseDates {
  theater?: string;
  dvd?: string;
}
