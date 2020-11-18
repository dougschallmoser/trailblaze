import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getUserProfile } from './actions'
import NavBar from './components/NavBar';
import Error from './components/Error';
import SearchContainer from './containers/SearchContainer';
import RootContainer from './containers/RootContainer';
import ChatConversationsList from './components/ChatConversationsList';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  })

  return (
    <Router>
      <Error />
      <NavBar />
      <div className="main-container">
        <Route path="/messages" exact>
          <ChatConversationsList />
        </Route>
        <Route path="/" exact>
          <RootContainer />
        </Route>
        <Route path="/search">
          <SearchContainer />
        </Route>
      </div>
    </Router>
  )
}

export default App;