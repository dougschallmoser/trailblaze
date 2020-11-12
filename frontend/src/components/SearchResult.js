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
    <div className="item">
      <img src={faker.image.avatar()} alt="avatar" />
      <span id="username-display">{user.username},</span>
      <span id="age-display">{userAge()}</span>
      <p id="bio-display">{user.bio}</p>
    </div>
  )
}

export default SearchResult