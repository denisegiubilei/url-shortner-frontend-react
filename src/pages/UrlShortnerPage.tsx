import { Header } from "../components/Header/Header";
import { TopUrls } from "../components/TopUrls/TopUrls";
import { UrlShortner } from "../components/UrlShortner/UrlShortner";

export function UrlShortnerPage() {
  return (
    <div>
      <Header />
      <UrlShortner />
      <TopUrls />
    </div>
  );
}

