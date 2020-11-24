import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getUserProfile } from './actions'
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';
import RootContainer from './containers/RootContainer';
import ChatConversationsList from './components/ChatConversationsList';
import FavoritesList from './components/FavoritesList';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><RootContainer /></Route>
        <Route path="/search"><SearchContainer />
        </Route>
        <Route exact path="/users/:id/messages" render={(props) => <ChatConversationsList {...props} />} />
        <Route exact path="/users/:id/favorites" render={(props) => <FavoritesList {...props} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App;