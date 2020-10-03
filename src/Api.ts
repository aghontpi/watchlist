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
  const url = `https://api.bluepie.in/get/rottentomatoes/search/?query=${query}&page_limit=${pageLimit}&page=${page}`;
  return (await Api(url)) as Searchrt;
};

const InfoRT = async (id: string) => {
  const url = `https://api.bluepie.in/get/rottentomatoes/info/?id=${id}`;
  return (await Api(url)) as Searchrt;
};

export { SearchRT as rtSearch, InfoRT as rtInfo };
