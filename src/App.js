import { Routes, Route} from 'react-router-dom';
import './App.css';
import './Maternity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Maternity from './components/maternity';
import Navbar from './components/navBar';
import Book from './components/booking';
import About from './components/about';
import Wedding from './components/wedding';


function App() {
  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="maternity" element= {<Maternity />} />
      <Route path="booking" element= {<Book/>} />
      <Route path="about" element= {<About/>} />
      <Route path="wedding" element= {<Wedding/>} />



    </Routes>
    </>
    

   
  );
}

export default App;
