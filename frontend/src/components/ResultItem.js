import React from 'react';

const ResultItem = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt="avatar" /><br/>
      {user.username}<br/>
      {user.bio}
    </div>
  )
}

export default ResultItem