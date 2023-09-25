import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { ErrorPage, Login, Main, SignUpPage,About, ProfilePage, AddPostPage, ThreexThree } from './Routes';
import { Navbarr } from './Components/Header/Navbar';
import NavbarShow from './Components/Header/NavbarShow';
import {ToastContainer} from "react-toastify";
import { Home } from './Pages/Home';
import Activation from './Pages/Activation';
import ThreeD from './Pages/ThreeD';
import { useEffect } from 'react';
import Store from './redux/store';
import {LoadUser} from './redux/actions/user';
import { LoadPost } from './redux/actions/post';
function App() {
  useEffect(() => {
    Store.dispatch(LoadUser());
    Store.dispatch(LoadPost());
  }, [])
  
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
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/sign-up' element={<SignUpPage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/profile/:id' element={<ProfilePage />} />
          <Route path='/addpost' element={<AddPostPage />} />
          <Route path='/activation/:activation_token' element={<Activation />} />
          <Route path='/3x3' element={<ThreexThree />} />
          <Route path='/3d' element={<ThreeD />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
