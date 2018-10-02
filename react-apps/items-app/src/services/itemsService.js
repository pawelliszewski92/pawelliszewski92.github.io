import http from "./httpService";

const apiEndpoint =
  "https://my-json-server.typicode.com/pawelliszewski92/pawelliszewski92.github.io";

export function getCategories() {
  return http.get(apiEndpoint + "/categories");
}

export function getItems() {
  return http.get(apiEndpoint + "/items");
}
