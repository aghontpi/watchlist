/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// To parse this data:
//
//   import { Convert, RottenTomatoesSearch } from "./file";
//
//   const rottenTomatoesSearch = Convert.toRottenTomatoesSearch(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface RottenTomatoesSearch {
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
  theater?: Date;
  dvd?: Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toRottenTomatoesSearch(json: string): RottenTomatoesSearch {
    return cast(JSON.parse(json), r("RottenTomatoesSearch"));
  }

  public static rottenTomatoesSearchToJson(value: RottenTomatoesSearch): string {
    return JSON.stringify(uncast(value, r("RottenTomatoesSearch")), null, 2);
  }

  public static toContent(json: string): Content {
    return cast(JSON.parse(json), r("Content"));
  }

  public static contentToJson(value: Content): string {
    return JSON.stringify(uncast(value, r("Content")), null, 2);
  }

  public static toContentLinks(json: string): ContentLinks {
    return cast(JSON.parse(json), r("ContentLinks"));
  }

  public static contentLinksToJson(value: ContentLinks): string {
    return JSON.stringify(uncast(value, r("ContentLinks")), null, 2);
  }

  public static toMovie(json: string): Movie {
    return cast(JSON.parse(json), r("Movie"));
  }

  public static movieToJson(value: Movie): string {
    return JSON.stringify(uncast(value, r("Movie")), null, 2);
  }

  public static toAbridgedCast(json: string): AbridgedCast {
    return cast(JSON.parse(json), r("AbridgedCast"));
  }

  public static abridgedCastToJson(value: AbridgedCast): string {
    return JSON.stringify(uncast(value, r("AbridgedCast")), null, 2);
  }

  public static toMovieLinks(json: string): MovieLinks {
    return cast(JSON.parse(json), r("MovieLinks"));
  }

  public static movieLinksToJson(value: MovieLinks): string {
    return JSON.stringify(uncast(value, r("MovieLinks")), null, 2);
  }

  public static toPosters(json: string): Posters {
    return cast(JSON.parse(json), r("Posters"));
  }

  public static postersToJson(value: Posters): string {
    return JSON.stringify(uncast(value, r("Posters")), null, 2);
  }

  public static toRatings(json: string): Ratings {
    return cast(JSON.parse(json), r("Ratings"));
  }

  public static ratingsToJson(value: Ratings): string {
    return JSON.stringify(uncast(value, r("Ratings")), null, 2);
  }

  public static toReleaseDates(json: string): ReleaseDates {
    return cast(JSON.parse(json), r("ReleaseDates"));
  }

  public static releaseDatesToJson(value: ReleaseDates): string {
    return JSON.stringify(uncast(value, r("ReleaseDates")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) {
      return val;
    }
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) {
      return val;
    }
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) {
      return invalidValue("array", val);
    }
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = val[key];
      }
    });
    return result;
  }

  if (typ === "any") {
    return val;
  }
  if (typ === null) {
    if (val === null) {
      return val;
    }
    return invalidValue(typ, val);
  }
  if (typ === false) {
    return invalidValue(typ, val);
  }
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) {
    return transformEnum(typ, val);
  }
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") {
    return transformDate(val);
  }
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  RottenTomatoesSearch: o(
    [
      { json: "status", js: "status", typ: "" },
      { json: "content", js: "content", typ: r("Content") },
    ],
    false
  ),
  Content: o(
    [
      { json: "total", js: "total", typ: 0 },
      { json: "movies", js: "movies", typ: a(r("Movie")) },
      { json: "links", js: "links", typ: r("ContentLinks") },
      { json: "link_template", js: "link_template", typ: "" },
    ],
    false
  ),
  ContentLinks: o(
    [
      { json: "self", js: "self", typ: "" },
      { json: "next", js: "next", typ: "" },
    ],
    false
  ),
  Movie: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "title", js: "title", typ: "" },
      { json: "year", js: "year", typ: 0 },
      { json: "mpaa_rating", js: "mpaa_rating", typ: "" },
      { json: "runtime", js: "runtime", typ: 0 },
      {
        json: "critics_consensus",
        js: "critics_consensus",
        typ: u(undefined, ""),
      },
      { json: "release_dates", js: "release_dates", typ: r("ReleaseDates") },
      { json: "ratings", js: "ratings", typ: r("Ratings") },
      { json: "synopsis", js: "synopsis", typ: "" },
      { json: "posters", js: "posters", typ: r("Posters") },
      { json: "abridged_cast", js: "abridged_cast", typ: a(r("AbridgedCast")) },
      { json: "links", js: "links", typ: r("MovieLinks") },
    ],
    false
  ),
  AbridgedCast: o(
    [
      { json: "name", js: "name", typ: "" },
      { json: "id", js: "id", typ: "" },
      { json: "characters", js: "characters", typ: u(undefined, a("")) },
    ],
    false
  ),
  MovieLinks: o(
    [
      { json: "self", js: "self", typ: "" },
      { json: "alternate", js: "alternate", typ: "" },
      { json: "cast", js: "cast", typ: "" },
      { json: "reviews", js: "reviews", typ: "" },
      { json: "similar", js: "similar", typ: "" },
    ],
    false
  ),
  Posters: o(
    [
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "profile", js: "profile", typ: "" },
      { json: "detailed", js: "detailed", typ: "" },
      { json: "original", js: "original", typ: "" },
    ],
    false
  ),
  Ratings: o(
    [
      { json: "critics_rating", js: "critics_rating", typ: u(undefined, "") },
      { json: "critics_score", js: "critics_score", typ: 0 },
      { json: "audience_rating", js: "audience_rating", typ: "" },
      { json: "audience_score", js: "audience_score", typ: 0 },
    ],
    false
  ),
  ReleaseDates: o(
    [
      { json: "theater", js: "theater", typ: u(undefined, Date) },
      { json: "dvd", js: "dvd", typ: u(undefined, Date) },
    ],
    false
  ),
};
