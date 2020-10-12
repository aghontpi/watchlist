import AsyncStorage from "@react-native-community/async-storage";

interface CacheApiResponse {
  query: string;
  response: typeof JSON.parse;
  responseType: "info" | "search";
  origin: "idb" | "rt";
}

const KeyTemplate = (query: string, responseType: string, origin: string) =>
  `${query}:${responseType}:${origin}`;

const storeApiResponse = async ({
  query,
  response,
  responseType,
  origin,
}: CacheApiResponse) => {
  try {
    const key = KeyTemplate(query, responseType, origin);
    await AsyncStorage.setItem(key, JSON.stringify(response));
  } catch (err) {
    console.log(err);
    return false;
  }
};

type RetrieveApiResponse = Omit<CacheApiResponse, "response">;

const retrieveApiResponse = async ({
  query,
  responseType,
  origin,
}: RetrieveApiResponse): Promise<JSON | null> => {
  let rtnValue = null;
  try {
    const key = KeyTemplate(query, responseType, origin);
    const retrievedValue = await AsyncStorage.getItem(key);
    rtnValue = retrievedValue != null ? JSON.parse(retrievedValue) : null;
  } catch (err) {
    console.log(err);
  }
  return rtnValue;
};

export {
  storeApiResponse as StoreIntoCache,
  retrieveApiResponse as RetrieveFromCache,
};
