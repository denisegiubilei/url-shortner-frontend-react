import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { TopUrls } from "./components/TopUrls/TopUrls";
import { UrlShortner } from "./components/UrlShortner/UrlShortner";
import { UrlRedirector } from "./components/UrlRedirector/UrlRedirector";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:urlShort">
          <UrlRedirector />
        </Route>
        <Route path="/">
          <div>
            <Header />
            <UrlShortner />
            <TopUrls />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
