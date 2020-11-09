import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import RequestCreate from './components/requests/RequestCreate';
import { getUserProfile } from './actions'

const App = () => {

  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    getUserProfile();
  })

  return (
    <div>
      <Router>
        <NavBar currentUser={currentUser} />
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
        <Route path="/create" exact>
          <RequestCreate />
        </Route>
      </Router>
    </div>
  )
}

export default App;