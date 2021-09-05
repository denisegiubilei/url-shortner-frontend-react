import style from './ShortUrl.module.scss';

interface ShortUrlProps {
  shortUrl: string;
}

export const ShortUrl = ({ shortUrl }: ShortUrlProps) => (
  <p className={style.ShortUrl}>
    Short url: <a href={shortUrl} rel="noreferrer" target="_blank">{shortUrl}</a>
  </p>
);