import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {

  return (
    <div>
      <NavBar />
      <Route path="/" exact>
        <SearchContainer />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </div>
  )
}

export default App;