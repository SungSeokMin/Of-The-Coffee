import './App.css';
import Header from './page/Header';
import Home from './page/Home';
import { Route } from 'react-router-dom';
import Almond from './components/Almond';
import Footer from './page/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerContainer">
        <Route path="/" component={Home} exact />
        <Route path="/Almond" component={Almond} exact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
