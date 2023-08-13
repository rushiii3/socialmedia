import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ErrorPage, Login, Main } from './Routes';
function App() {
  return (
    <div className="App">
      <Router>
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
