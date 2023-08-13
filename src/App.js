import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ErrorPage, Login, Main } from './Routes';
import { Navbarr } from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbarr />
        <Routes>
          
        <Route path='*' element={<ErrorPage />}/>
          <Route path='/' element={<Main />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
