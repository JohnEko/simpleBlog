'use client'

import React, { useContext } from 'react'
import { UserContext } from '../component/navbar/UserContext';
import { userInfo } from 'node:os';

const logoutPage =  () => {
    const {userInfo, setUserInfo} :any  = useContext(UserContext);
    
  
    const response =  fetch('http://localhost:4000/logout', {
        method: 'POST'
    }); if (response == userInfo){
            setUserInfo(userInfo);
    }
    //setUserInfo(null);

  return (
    <div>page</div>
  )
}

export default logoutPage
