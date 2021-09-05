import { URL_DATABASE } from "./constants";

export const createShortUrl = (url: string) => {
  const encodedUrl = encodeURIComponent(url);
  return fetch(`${URL_DATABASE}/${encodedUrl}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const listTopVisited = () => {
  return fetch(`${URL_DATABASE}/top-urls`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
