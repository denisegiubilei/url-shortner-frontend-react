import { TopUrls } from "./components/TopUrls/TopUrls";
import { UrlShortner } from "./components/UrlShortner/UrlShortner";

function App() {
  return (
    <div>
      <h1>Url shortner</h1>
      <UrlShortner />
      <TopUrls />
    </div>
  );
}

export default App;
