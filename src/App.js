import './App.css';
import About from './Components/About';
import Background from './Components/Background';
import Connect from './Components/Connect';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Groups from './Components/Groups';
import Navbars from './Components/Navbars';



function App() {
  return (
    <div>
      <Background/>
      <About/>
      <Groups/>
      <Connect/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
