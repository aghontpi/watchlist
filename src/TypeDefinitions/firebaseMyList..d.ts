export interface FirebaseMyListResponse {
  cast: Cast[];
  certificate: Certificate;
  directors: string[];
  genre: string[];
  metaCriticCount: string;
  metaScore: string;
  overview: string;
  poster: string;
  rating: string;
  ratingCount: string;
  release: string;
  runtime: string;
  title: string;
}

export interface Cast {
  actor: string;
  img: string;
  role: string;
}

export enum Certificate {
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
}
