import { FormEvent, useState } from 'react';
import { createShortUrl } from '../../api/urls';

import { UrlEntity } from '../../interfaces/Url';

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      longUrl: { value: string };
    };

    const longUrl = target.longUrl.value;

    createShortUrl(longUrl).then((res: UrlEntity) => {
      setShortUrl(res.url_short);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="longUrl" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="www.your-url-here.com" />
      <button type="submit">Shorten It!</button>
      <p>short url: {shortUrl}</p>
    </form>
  );
}

export { UrlShortner }