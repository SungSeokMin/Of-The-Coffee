import './App.css';
import Header from './page/Header';
import LandingPage from './page/LandingPage';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerContainer">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
