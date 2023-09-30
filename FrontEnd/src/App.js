import "./App.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Navbarr } from "./Components/Header/Navbar";
import NavbarShow from "./Components/Header/NavbarShow";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Store from "./redux/store";
import { LoadUser } from "./redux/actions/user";
import { LoadPost } from "./redux/actions/post";
import AnimatedRoutes from "./AnimatedRoutes";
function App() {
  
  useEffect(() => {
    Store.dispatch(LoadUser());
    Store.dispatch(LoadPost());
  }, []);

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
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
