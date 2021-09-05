import style from './ShortUrl.module.scss';

interface ShortUrlProps {
  shortUrl: string;
}

export const ShortUrl = ({ shortUrl }: ShortUrlProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  }

  return (
    <p className={style.ShortUrl}>
      Short url: <a href={shortUrl} rel="noreferrer" target="_blank">{shortUrl}</a>
      <button onClick={handleCopy}>Copy</button>
    </p>
  );
}