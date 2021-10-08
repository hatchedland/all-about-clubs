
import './App.css';
import { Home } from './components/homepage/Home';
import { Feed } from './components/feedsection/NewsFeed';
import { AboutUs } from './components/aboutus/AboutUs';
import { Club } from './components/club/Club';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
          <Route path="/feed" component={Feed} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/fee" component={Club} />
          <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
