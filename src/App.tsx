import { Header } from "./components/Header/Header";
import { TopUrls } from "./components/TopUrls/TopUrls";
import { UrlShortner } from "./components/UrlShortner/UrlShortner";

function App() {
  return (
    <div>
      <Header />
      <UrlShortner />
      <TopUrls />
    </div>
  );
}

export default App;
