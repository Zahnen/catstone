import Fact from './Fact';
import Breed from './Breed';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container"> 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/fact">
            <Fact/>
          </Route>
          <Route path="/breeds">
            <Breed/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;