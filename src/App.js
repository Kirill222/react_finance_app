import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'

function App() {

  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>

            <Route path="/signup">
              {user && <Redirect to="/"/>}
              {!user && <Signup />}
            </Route>

            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
          </Switch>
        </Router>
      )}
            
    </div>
  );
}

export default App;
