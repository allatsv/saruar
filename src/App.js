import './App.css';
import Services from './components/Services';
import About from './components/About';
import Pluses from './components/Pluses';
import Geography from './components/Geography';
import Reviews from './components/Reviews';
import News from './components/News';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Services/>
      <About/>
      <Pluses/>
      <Geography/>
      <Reviews/>
      <News/>
      <Subscribe/>
    </div>
  );
}

export default App;
