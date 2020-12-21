import React from 'react';
import { useSelector } from 'react-redux';
import ChatNewConversation from './ChatNewConversation';

const SearchResult = ({ user }) => {

  const currentUser = useSelector(state => state.currentUser);

  const loggedIn = () => {
    return !!Object.keys(currentUser).length
  }

  const displayUserAge = () => {
    const birthDate = new Date(user.dob)
    const difference = Date.now() - birthDate.getTime()
    const age = new Date(difference)
    return Math.abs(age.getUTCFullYear() - 1970)
  }

  const renderItem = () => {
    if (user.id !== currentUser.id) {
      return (
        <div className="item">
          <img src={user.avatar} alt="avatar" />
          <span id="username-display">{user.name},</span>
          <span id="age-display">{displayUserAge()}</span>
          <span id="gender-display">{user.gender === "nondisclose" ? null : user.gender}</span>
          <p id="bio-display">{user.bio}</p><br/>
          {loggedIn() && <ChatNewConversation user={user} currentUser={currentUser} />}
        </div>
      )
    } else {
      return null
    }
  }

  return renderItem();
}

export default SearchResult