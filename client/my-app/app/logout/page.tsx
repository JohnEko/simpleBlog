'use client'

import React, { useContext } from 'react'
import { UserContext } from '../component/navbar/UserContext';

const logoutPage = () => {
    const {userInfo, setUserInfo} : any  = useContext(UserContext);
  
    fetch('http://localhost:4000/logout', {
        credentials: 'include', 
        method: 'POST'
    })
    //setUserInfo(null);

  return (
    <div>page</div>
  )
}

export default logoutPage
