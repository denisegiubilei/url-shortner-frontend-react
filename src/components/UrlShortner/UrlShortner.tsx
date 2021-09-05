import { FormEvent, useState } from 'react';
import { createShortUrl } from '../../api/urls';

import { UrlEntity } from '../../interfaces/Url';

import { ShortUrl } from './ShortUrl/ShortUrl';

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
      setShortUrl(`${window.location.href}${res.url_short}`);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="longUrl" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="www.your-url-here.com" />
      <button type="submit">Shorten It!</button>
      {shortUrl && <ShortUrl shortUrl={shortUrl} />}
    </form>
  );
}

export { UrlShortner }