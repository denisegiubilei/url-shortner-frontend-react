import { Header } from "../components/Header/Header";
import { TopUrls } from "../components/TopUrls/TopUrls";
import { UrlShortner } from "../components/UrlShortner/UrlShortner";

import style from './UrlShortnerPage.module.scss'

export function UrlShortnerPage() {
  return (
    <div className={style.UrlShortnerPage}>
      <Header />
      <UrlShortner />
      <TopUrls />
    </div>
  );
}

