import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
