import React from 'react';

const ChatRenderDropdown = ({ handleReject, handleClick }) => {
  return (
    <div className="dropdown-menu-chat">
      <div className="dropdown-content-chat">
        <div className="dropdown-content-padding">
          <div className="dropdown-content-item">
            <button onClick={handleReject} className="user-submit">Delete Conversation</button>
          </div>
        </div>
        <div className="dropdown-content-bottom">
          <button className="close-button" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ChatRenderDropdown;