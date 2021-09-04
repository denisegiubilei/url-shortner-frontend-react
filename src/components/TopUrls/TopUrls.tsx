import { useEffect, useState } from 'react';
import { listTopVisited } from '../../api/urls';

import { UrlEntity } from '../../interfaces/Url';

const TopUrls = () => {

  const [urlList, setUrlList] = useState([] as UrlEntity[])

  useEffect(() => {
    listTopVisited().then(res => {
      setUrlList(res);
    })
  }, []);

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