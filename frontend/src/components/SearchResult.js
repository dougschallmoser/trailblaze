import React from 'react';
import faker from 'faker';

const SearchResult = ({ user }) => {

  const userAge = () => {
    const birthDate = new Date(user.dob)
    const difference = Date.now() - birthDate.getTime()
    const age = new Date(difference)
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return (
    <div>
      <img src={faker.image.avatar()} alt="avatar" /><br/>
      {user.username}, {userAge()}<br/>
      {user.bio}
    </div>
  )
}

export default SearchResult