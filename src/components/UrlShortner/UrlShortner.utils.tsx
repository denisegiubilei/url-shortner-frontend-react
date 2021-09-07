import { isFieldEmpty, isValidUrl } from "../utils/url.utils";

export function validateUrl(longUrl: string) {
  let error = "";

  if (isFieldEmpty(longUrl)) {
    error = "Url field cannot be empty!"
  }
  if (!isValidUrl(longUrl)) {
    error = "Invalid Url!"
  }

  return error;
}
