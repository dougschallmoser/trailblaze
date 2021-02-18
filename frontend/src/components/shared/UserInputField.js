import React from 'react';

const UserInputField = ({ type, name, value, onChange, label }) => {
  return (
    <div className="signup-input">
      <label>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default UserInputField;