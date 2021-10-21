import './App.css';
import Header from './page/Header';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerContainer">
        <Home />
      </div>
    </div>
  );
}

export default App;
