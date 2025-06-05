'use client'

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'


 
 const Header = () => {
 
  //const [username, setUsername] = useState(null)
  const {userInfo, setUserInfo} : any  = useContext(UserContext);

  useEffect(() =>{
    fetch('http://localhost:4000/profile', {
      credentials: 'include' 
    }).then(response => response.json())
      .then((userInfo) =>{
        setUserInfo(userInfo)
        // setUsername(userInfo.username)
      })
    
  }, [])

//   function logout() {
//     fetch('http://localhost:4000/logout', {
//       credentials: 'include', 
//       method: 'POST'
//   })
//   setUserInfo(null)
// };

const username = userInfo?.username

   return (
      <header>

                <Link href={"/"} className="logo">NaijaForum</Link>
                 {/* wecan create a login page different but for this 
                 tutorial we create it here */}
                  
                        {/* <Link href="/create">Create post</Link> */}
                     
                  <nav>
                    {!username && (
                      <>
                        <Link href="/create">Create new post</Link>
                        <Link href={"/logout"}>Logout</Link>
                      </>
                    )}

                    {username && (
                      <>
                        <Link href={"/login"}>
                        Login
                        </Link>
                        
                        <Link href={"/register"}>
                            Register
                        </Link>
                      </>
                    )}
                 </nav>
                 
            </header>
   )
 }

  export default Header
 