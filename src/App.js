import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { ErrorPage, Login, Main, SignUpPage } from './Routes';
import { Navbarr } from './Components/Navbar';
import NavbarShow from './Components/NavbarShow';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
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
