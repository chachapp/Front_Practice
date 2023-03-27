import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
       <Route path="/" exact={true} element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/profiles/*" element={<Profiles/>} />


      </Routes>

    </div>
  );
}

export default App;
