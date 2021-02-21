import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import NewStudent from './components/NewStudent';
import ModifyStudent from './components/ModifyStudent';

export default App = () => {

  return (
    <Router >
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/NewStudent" component = {NewStudent} />
        <Route path = "/ModifyStudent" component = {ModifyStudent}/>
      </Switch>
    </Router>
  );
}
