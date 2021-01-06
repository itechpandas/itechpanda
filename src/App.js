
import react, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Authenticated from './components/Authenticated';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

export default class App extends Component {

  render() {
    return (

      <Switch>
        <Route exact path="/">
         <Authenticated>
            <Dashboard />
       </Authenticated>
        </Route>
        <Route exact path="/login" >
          <Authenticated nonAuthenticated={true}>
            <Login />
          </Authenticated>
        </Route>
        <Route path='*' render={() => "404 not found"} />
      </Switch>

    );
  }

} 