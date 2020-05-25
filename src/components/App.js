import React from 'react';
import Landing from './Landing'
import NavigationBar from './NavigationBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './UserLogin'
import DisplayShops from './DisplayShops'
import Shop from './Shop'
import SignUp from './SignUp'
import '../App.css';

function App() {
  return (
 

<Router>

<div className="App">
<NavigationBar />
  <Switch>
  
  <Route path="/shops/:id" component={Shop} />
    <Route path="/signin" component={UserLogin} />
    <Route path="/shops" component={DisplayShops} />
    <Route path="/signup" component={SignUp} />
    <Route path="/" component={Landing} />
  </Switch>
</div>
</Router>
    
  );
}

export default App;
