import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions';
import { Redirect } from "react-router";

const Logout = () => {

  const dispatch = useDispatch();
  useEffect(dispatch(logoutUser))

  return (
    <Redirect to="/login" />
  )
}

export default Logout;