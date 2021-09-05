import { useEffect, useState } from 'react';
import { listTopVisited } from '../../api/urls';

import { UrlEntity } from '../../interfaces/Url';
import { Loader } from '../Loader/Loader';

import styles from './TopUrls.module.scss';

const TopUrls = () => {
  const [urlList, setUrlList] = useState([] as UrlEntity[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listTopVisited().then(res => {
      setUrlList(res);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.TopUrls}>
      <h2>Top most viewed Urls</h2>
      <ul>
        {
          urlList?.map(({ url, url_short, view_count }: UrlEntity, index: number) => (
            <li key={index}>
              <span>
                <a href={`${window.location.href}${url_short}`} rel="noreferrer" target="_blank">{window.location.href}{url_short}</a>
              </span>
              <span className={styles.longUrl}>{url}</span>
              <span>{`${view_count} views`}</span>
            </li>
          ))
        }
      </ul>
    </section >
  );
}

export { TopUrls }