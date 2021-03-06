import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import TopBar from './TopBar/TopBar'
import Home from "./Pages/Home/Home"
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Settings/Settings"
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/register">
         {user ? <Home/> : <Register/>}   
        </Route>
        <Route  path="/settings">
         {user ? <Settings/> : <Register/>}   
        </Route>
        <Route  path="/write">
         {user ? <Write/> : <Register/>}    
        </Route>
        <Route  path="/login">
         {user ? <Home/> : <Login/>}     
        </Route>
        <Route  path="/post/:postId">
         {<Single/>}     
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
