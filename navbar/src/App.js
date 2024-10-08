
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
