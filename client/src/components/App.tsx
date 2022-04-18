import { Route, Switch } from "react-router-dom";
import UrlForm from "components/UrlForm";
import Redirect from "components/Redirect";
import Navbar from "components/Navbar";
import UrlList from "components/UrlList";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/urls" component={UrlList} />
        <Route path="/:id" component={Redirect} />
        <Route path="/" component={UrlForm} />
      </Switch>
    </>
  );
}

export default App;
