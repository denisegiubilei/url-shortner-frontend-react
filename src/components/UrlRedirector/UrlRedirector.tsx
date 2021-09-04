import { useEffect } from 'react';
import { useParams } from 'react-router';
import { URL_DATABASE } from '../../api/constants';

const UrlRedirector = () => {
  const { urlShort }: any = useParams();

  useEffect(() => {
    if (urlShort) {
      window.location.href = `${URL_DATABASE}/${urlShort}`;
    }
  }, [urlShort]);

  return null;
}

export { UrlRedirector }