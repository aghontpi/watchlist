import AsyncStorage from "@react-native-community/async-storage";

interface CacheApiResponse {
  query: string;
  response: JSON;
  responseType: "info" | "search";
  origin: "idb" | "rt";
}

const storeApiResponse = async ({
  query,
  response,
  responseType,
  origin,
}: CacheApiResponse) => {
  try {
    const key = `${query}:${responseType}:${origin}`;
    await AsyncStorage.setItem(key, JSON.stringify(response));
  } catch (err) {
    console.log(err);
    return false;
  }
};

interface RetrieveApiResponse extends Omit<CacheApiResponse, "response"> {}

const retrieveApiResponse = async ({
  query,
  responseType,
  origin,
}: RetrieveApiResponse): Promise<JSON | null> => {
  let rtnValue = null;
  try {
    const key = `${query}:${responseType}:${origin}`;
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
