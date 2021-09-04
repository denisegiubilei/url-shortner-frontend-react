import { URL_DATABASE } from "./constants";

export const createShortUrl = (url: string) => {
  return fetch(`${URL_DATABASE}/${url}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then(function (response) {
    return response.json();
  });
};

export const listTopVisited = () => {
  return fetch(`${URL_DATABASE}/top-urls`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then(function (response) {
    return response.json();
  });
};
