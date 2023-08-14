import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { ErrorPage, Login, Main, SignUpPage } from './Routes';
import { Navbarr } from './Components/Navbar';
import NavbarShow from './Components/NavbarShow';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarShow>
          <Navbarr />
        </NavbarShow>
        <Routes>
          
        <Route path='*' element={<ErrorPage />}/>
          <Route path='/' element={<Main />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/sign-up' element={<SignUpPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
