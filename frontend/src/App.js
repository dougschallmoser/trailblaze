import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import RequestCreate from './components/requests/RequestCreate';
import { getUserProfile } from './actions'

const App = () => {

  useEffect(() => {
    getUserProfile();
  })

  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" exact>
          <SearchContainer />
          <ResultsContainer />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/create" exact>
          <RequestCreate />
        </Route>
      </Router>
    </div>
  )
}

export default App;