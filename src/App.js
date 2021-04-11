import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostWithComt from './components/PostWithComt/PostWithComt';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/PostWithComt/:id">
          <PostWithComt />
        </Route>
        <Route exact path="/">
            <Post />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
