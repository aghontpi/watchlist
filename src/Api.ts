import { RetrieveFromCache, StoreIntoCache } from "./Cache";
import { Searchrt } from "./TypeDefinitions";

const Api = async (url: string) => {
  const rawResponse = await fetch(url);
  return await rawResponse.json();
};

interface SearchRTProps {
  query: string;
  pageLimit: number;
  page: number;
}

const SearchRT = async ({ query, pageLimit, page }: SearchRTProps) => {
  const cache = await RetrieveFromCache({
    query: query,
    responseType: "search",
    origin: "rt",
  });
  if (cache) {
    return cache;
  }

  const url = `https://api.bluepie.in/get/rottentomatoes/search/?query=${query}&page_limit=${pageLimit}&page=${page}`;
  const response = await Api(url);
  StoreIntoCache({
    query: query,
    responseType: "search",
    origin: "rt",
    response: response,
  });

  return response as Searchrt;
};

const InfoRT = async (id: string) => {
  const url = `https://api.bluepie.in/get/rottentomatoes/info/?id=${id}`;
  return (await Api(url)) as Searchrt;
};

export interface ImdbSearchProps {
  title: string;
}

const searchImdb = async ({ title: query }: ImdbSearchProps) => {
  const cache = await RetrieveFromCache({
    query: query,
    responseType: "search",
    origin: "idb",
  });
  if (cache) {
    return cache;
  }
  const url = `https://api.bluepie.in/get/imdb/search/?title=${query}`;
  const response = await Api(url);
  response.status === "success" &&
    StoreIntoCache({
      query: query,
      response: response,
      origin: "idb",
      responseType: "search",
    });
  return response;
};

interface ImdbInfoProps {
  id: string;
}

const infoImdb = async ({ id: query }: ImdbInfoProps) => {
  const cache = await RetrieveFromCache({
    query: query,
    responseType: "search",
    origin: "idb",
  });
  if (cache) {
    return cache;
  }
  const url = `https://api.bluepie.in/get/imdb/info/?id=${query}`;

  const response = await Api(url);
  StoreIntoCache({
    query: query,
    response: response,
    origin: "idb",
    responseType: "search",
  });
  return response;
};

export {
  SearchRT as rtSearch,
  InfoRT as rtInfo,
  searchImdb as searchIDB,
  infoImdb as infoIDB,
};
