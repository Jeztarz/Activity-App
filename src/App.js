
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

const App = () => {
  return (
    
    <section>
    <div className="color"></div>
    <div className="color"></div>
    <div className="color"></div>

    <Router>
    
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
      </Routes>
    
   </Router>
      
    
    </section>
  );
};

export default App;
