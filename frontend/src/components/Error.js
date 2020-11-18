import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Error = () => {

  const errors = useSelector(state => state.errors);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errors.length !== 0) {
      setIsOpen(true)
    }
  }, [errors])

  const toggleModal = () => {
    dispatch(removeError())
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="user-modal"
        overlayClassName="user-modal-overlay"
        closeTimeoutMS={0}
      >
        <div className="modal-container">
          <button className="close-button-user" onClick={toggleModal}>x</button><br/>
          {isOpen ? errors.map((error, i) => <div key={i} className="get-started main-color">{error}</div>) : null }
        </div>
      </Modal>
    </>
  )
}

export const removeError = () => {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_ERROR' })
  }
}

export default Error;