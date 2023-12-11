import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Maternity from './components/maternity';
import Navbar from './components/navBar';

function App() {
  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="maternity" element= {<Maternity />} />


    </Routes>
    </>
    

   
  );
}

export default App;
