import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Maternity from './components/maternity';
import Navbar from './components/navBar';
import Book from './components/booking';

function App() {
  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="maternity" element= {<Maternity />} />
      <Route path="booking" element= {<Book/>} />
    </Routes>
    </>
    

   
  );
}

export default App;
