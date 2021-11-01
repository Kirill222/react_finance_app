import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'

function App() {

  const {authIsReady} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      )}
            
    </div>
  );
}

export default App;
