import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Login/Signup';
import Activity from './pages/Activity/Activity';

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

        {/* <Route path="/profile" exact>
          <Profile/>
        </Route> */}
        
        <Route path="/login" exact>
          <Login/>
        </Route>

        <Route path="/register" exact>
          <Register/>
        </Route>

        <Redirect to="/"/>
      </Switch>
    </main>
   </Router>
  );
}

export default App;
