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
import Header from './components/Header';
import OurServices from './components/OurServices';
import Article from './components/Article';
import AllNews from './components/AllNews';
import Transportation from './components/Transportation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Transportation/>
      <AllNews/>
      <Article/>
      <OurServices/>
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
