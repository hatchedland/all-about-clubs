
import './App.css';
import { Home } from './components/homepage/Home';
import { Feed } from './components/feedsection/NewsFeed';
import { AboutUs } from './components/aboutus/AboutUs';
import { Club } from './components/club/Club';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Feed /> */}
      {/* <AboutUs /> */}
      <Club/>
      </div>
  );
}

export default App;
