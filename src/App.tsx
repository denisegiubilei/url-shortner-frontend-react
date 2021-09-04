import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UrlRedirector } from "./components/UrlRedirector/UrlRedirector";
import { UrlShortnerPage } from "./pages/UrlShortnerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:urlShort">
          <UrlRedirector />
        </Route>
        <Route path="/">
          <UrlShortnerPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
