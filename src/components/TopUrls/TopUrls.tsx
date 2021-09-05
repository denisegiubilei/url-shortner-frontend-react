import { useEffect, useState } from 'react';
import { listTopVisited } from '../../api/urls';

import { UrlEntity } from '../../interfaces/Url';
import { Loader } from '../Loader/Loader';

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
    <ul>
      {
        urlList?.map(({ url, view_count }: UrlEntity, index: number) => (
          <li key={index}>{url} - {view_count}</li>
        ))
      }
    </ul>
  );
}

export { TopUrls }