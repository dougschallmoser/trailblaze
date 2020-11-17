import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import RootContainer from './containers/RootContainer';
import ResultsContainer from './containers/ResultsContainer';
import ChatConversationsList from './components/ChatConversationsList';
import { getUserProfile } from './actions'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  })

  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Route path="/messages" exact>
          <ChatConversationsList />
        </Route>
        <Route path="/" exact>
          <RootContainer />
        </Route>
        <Route path="/search" exact>
          <SearchContainer />
          <ResultsContainer />
        </Route>
      </div>
    </Router>
  )
}

export default App;