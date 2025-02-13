import './App.css';
import Services from './components/Services';
import About from './components/About';
import Pluses from './components/Pluses';
import Geography from './components/Geography';
import Reviews from './components/Reviews';
import News from './components/News';
import Subscribe from './components/Subscribe';
import Additional from './components/Additional';
import Success from './components/Success';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Services/>
      <Additional/>
      <About/>
      <Pluses/>
      <Geography/>
      <Success/>
      <Reviews/>
      <News/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
