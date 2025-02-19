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
import AboutHistory from './components/AboutHistory';
import Functions from './components/Functions';
import Team from './components/Team';
import Numbers from './components/Numbers';

function App() {
  return (
    <div className="App">
      <AboutHistory/>
      <Functions/>
      <Team/>
      <Numbers/>
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
