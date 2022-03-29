import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Activity from './pages/Activity/Activity';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Record from './pages/Record/Record'
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Login/Signup';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/activity" exact>
          <Activity/>
        </Route>
        <Route path="/record" exact>
          <Record/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
