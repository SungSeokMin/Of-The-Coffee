import './App.css';
import Header from './page/Header';
import LandingPage from './page/LandingPage';
import { Route, Switch } from 'react-router';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <div className="innerContainer">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/milkLab" exact component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
