import { Route, Switch } from "react-router-dom";
import UrlForm from "components/UrlForm";
import Redirect from "components/Redirect";

function App() {
  return (
    <Switch>
      <Route path="/:id" component={Redirect} />
      <Route path="/" component={UrlForm} />
    </Switch>
  );
}

export default App;
