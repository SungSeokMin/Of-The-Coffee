import './App.css';
import Header from './page/Header';
import LandingPage from './page/LandingPage';
import { Route, Switch } from 'react-router';
import Home from './page/Home';
import Footer from './page/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerContainer">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/milkLab" exact component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
