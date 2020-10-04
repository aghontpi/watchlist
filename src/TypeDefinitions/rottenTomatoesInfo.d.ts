export interface Infort2 {
  status: string;
  content: Content;
}

export interface Content {
  studio: string;
  isInTheaters: boolean;
  adjustedScore: number;
  ratingSummary: RatingSummary;
  isPlaying: boolean;
  id: number;
  title: string;
  vanity: string;
  officialUrl: string;
  advisory: string;
  synopsis: string;
  casts: Casts;
  mainTrailer: MainTrailer;
  isOnDVD: boolean;
  year: number;
  trackingType: string;
  genreSet: GenreSet[];
  isUpcoming: boolean;
  reviews: Reviews;
  status: string;
  mpaaRating: string;
  purchaseOptions: PurchaseOptions;
  links: ContentLinks;
  boxoffice: string;
  videoClips: VideoClips;
  runningTime: number;
  runningTimeStr: string;
  url: string;
  photos: Photos;
  isOnOpening: boolean;
  isLimited: boolean;
  posters: Posters;
  ratings: Ratings;
}

export interface Casts {
  creators: People[] | [];
  castItems: CastItem[] | [];
  screenwriters: People[] | [];
  directors: People[] | [];
  producers: People[] | [];
}

export interface CastItem {
  person?: People;
  characters?: Character[];
}

export interface Character {
  name: string;
}

export interface People {
  name: string;
  thumbnailImg: string;
  url: string;
}

export interface GenreSet {
  id: number;
  displayName: string;
}

export interface ContentLinks {
  alternate: string;
}

export interface MainTrailer {
  id: number;
  thumbUrl: string;
  mp4Url: string;
  hlsUrl: string;
}

export interface Photos {
  photos: Photo[];
  length: number;
}

export interface Photo {
  id: string;
  photoType: PhotoType;
  index: number;
  imageId: number;
  thumbnail: string;
  height: number;
  width: number;
  submittedDate: string;
  submittedBy: SubmittedBy;
  url: string;
  caption?: string;
}

export enum PhotoType {
  Movie = "movie",
}

export enum SubmittedBy {
  RTStaff = "RT Staff",
}

export interface Posters {
  thumbnail: string;
  detailed: string;
  original: string;
  profile: string;
}

export interface PurchaseOptions {
  iTunes: ITunes;
  vudu: Vudu;
  amazon: Amazon;
}

export interface Amazon {
  isPrime: boolean;
  type: string;
  url: string;
}

export interface ITunes {
  price: string;
  url: string;
}

export interface Vudu {
  type: string;
  url: string;
}

export interface RatingSummary {
  topCritics: Critics;
  audience: Audience;
  allcount: number;
  freshcount: number;
  dvdcount: number;
  consensus: string;
  allCritics: Critics;
  rottencount: number;
  topcount: number;
}

export interface Critics {
  averageRating: number;
  meterValue: number;
  numReviews: number;
  meterClass: string;
  numRotten: number;
  hasScore: boolean;
  hasReviews: boolean;
  numFresh: number;
}

export interface Audience {
  numTotal: number;
  averageScore: number;
  ratingType: string;
  meterScore: number;
}

export interface Ratings {
  theaterReleaseDate: number;
  critics_score: number;
  critics_rating: string;
  dvdReleaseDate: number;
  audience_score: number;
  audience_rating: string;
}

export interface Reviews {
  total: number;
  reviews: Review[];
  links: ReviewsLinks;
}

export interface ReviewsLinks {
  alternate: string;
  next: string;
  self: string;
  prev: string;
}

export interface Review {
  id: number;
  creationDate: number;
  isRotten: boolean;
  original_score?: string;
  quote: string;
  links: ReviewLinks;
  freshness: Freshness;
  isTop: boolean;
  url: string;
  isFresh: boolean;
  critic: Critic;
  publication: Publication;
}

export interface Critic {
  id: number;
  name: string;
  thumbnailImage: string;
  url: string;
}

export enum Freshness {
  Fresh = "fresh",
  Rotten = "rotten",
}

export interface ReviewLinks {
  review: string;
}

export interface Publication {
  name: string;
  url?: string;
}

export interface VideoClips {
  mainTrailer: VideoClipClass;
  videoClips: VideoClipClass[];
  size: number;
}

export interface VideoClipClass {
  id: number;
  title: string;
  minutes: number;
  seconds: number;
  thumbUrl: string;
  mp4Url: string;
  hlsUrl: string;
}
