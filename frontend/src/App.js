import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import GoogleMap from './components/GoogleMap';
import { getUserProfile } from './actions'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  })

  return (
    <div>
      <Router>
        <NavBar />
        <div className="main-container">
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
          <Route path="/map" exact>
            <GoogleMap />
          </Route>
        </div>
      </Router>
    </div>
  )
}

export default App;