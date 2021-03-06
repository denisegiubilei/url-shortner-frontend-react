import { FormEvent, useState } from 'react';
import { createShortUrl } from '../../api/urls';
import { validateUrl } from './UrlShortner.utils';

import styles from "./UrlShortner.module.scss";

import { UrlEntity } from '../../interfaces/Url';

import { ShortUrl } from './ShortUrl/ShortUrl';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';


const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValid = (longUrl: string) => {
    const errorMessage = validateUrl(longUrl);

    setError(errorMessage);

    return !errorMessage;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      longUrl: { value: string };
    };

    const longUrl = target.longUrl.value?.trim();

    if (isValid(longUrl)) {
      setIsLoading(true);

      createShortUrl(longUrl)
        .then((res: UrlEntity) => {
          setShortUrl(`${window.location.href}${res.url_short}`);
        })
        .catch((error => {
          setError(error.message);
        }))
        .finally(() => setIsLoading(false));
    }
  }

  return (
    <section className={styles.UrlShortner} >
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            required 
            type="text" 
            name="longUrl" 
            value={longUrl} 
            onChange={(e) => setLongUrl(e.target.value)} placeholder="www.your-url-here.com" 
          />
          {error && <ErrorMessage message={error} />}
        </div>
        <button type="submit">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <span>Shorten It!</span>
          )}
        </button>
      </form>
      {shortUrl && !error && <ShortUrl shortUrl={shortUrl} />}
    </section>
  );
}

export { UrlShortner }