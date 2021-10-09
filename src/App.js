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

      <Switch>
        <Route path="/" exact component={Home} />
        <div className="innerContainer">
          <Route path="/milkLab" exact component={LandingPage} />
          <Footer />
        </div>
      </Switch>
    </div>
  );
}

export default App;
