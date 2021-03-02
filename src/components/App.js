import Fact from './Fact';
import Breed from './Breed';
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/fact">
            <Fact/>
          </Route>
          <Route path="/breeds"></Route>
          
          <Breed/>
      </Switch>
    </Router>
  );
}

export default App;



<Router>
<NavBar />
<Switch>
  <Route path = "/signin">
    <Signin />
  </Route>
  <Route path = "/">
    <RecipeControl />
  </Route>
</Switch>
</Router>