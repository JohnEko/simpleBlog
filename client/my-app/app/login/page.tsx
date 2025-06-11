'use client'

import { useRouter } from "next/navigation"
import React, {useState, useEffect, useContext} from "react"
import "./login.css"
import { UserContext } from "../component/navbar/UserContext"
import CreatePost from "../create/page"


const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {userInfo, setUserInfo}: any = useContext(UserContext)


   const submitLogin = async () =>{
    const forData = {
      username : username,
      password :password
    }
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(forData),
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin'
    })
      if (response.ok){
        response.json()
        .then(userInfo =>{
        setUsername(userInfo)
        router.push('/')
        })
        
        
      } else {
        console.log('Your password is wrong')
      }
    
  }


  return (
          <div>
            
              <form className="login" action={submitLogin}>
                <h1>Login</h1>
                <input type="text" 
                       placeholder="username" 
                       value={username} 
                       onChange={(e) => 
                       setUsername(e.target.value)}
                  />
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={(e) => 
                      setPassword(e.target.value)}
                  />
                <button>Login</button>

              </form>
              <CreatePost />
          </div>
    
  )
}
export default Login


 