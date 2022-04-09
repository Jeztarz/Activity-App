import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Signup';

const App = () => {
  return (
   <Router>
    
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
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
