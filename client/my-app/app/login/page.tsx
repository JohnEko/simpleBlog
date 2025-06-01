'use client'

import Router, { useRouter } from "next/router"
import React, {useState, useEffect} from "react"
import "./login.css"


const Login = () => {
  // const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

   const submitLogin = async () =>{
    const forData = {
      username : username,
      password :password
    }
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(forData),
      headers: {'Content-Type': 'application/json'}
    })
     .then(response => response.json())
     .then((json) => {
          console.log('Response:', json)})
     .catch((error => {
                    console.log(error);
                }))

    
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
          </div>
    
  )
}
export default Login


 