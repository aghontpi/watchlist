import { RottenTomatoesSearch } from "./rottenTomatoes";

const URL =
  "https://api.bluepie.in/get/rottentomatoes/search/?query=avengers&page_limit=10&page=1";

const Api = async () => {
  const rawResponse = await fetch(URL);
  const json = await rawResponse.json();

  return await (json as RottenTomatoesSearch);
};

export default Api;
