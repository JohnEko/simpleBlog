'use client'

import React, {useState, useEffect} from "react"
import "./register.css"


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitRegister = async () =>{
    const forData = {
      email : username,
      password :password
    }
    await fetch('http://localhost:4000/register', {
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
            
              <form className="register" action={submitRegister}>
                <h1>Register</h1>
                <input type="text" 
                       placeholder="username" 
                       value={username} 
                       onChange={(e) => 
                       setUsername(e.target.value)}
                  />
                <input 
                    type="text" 
                    placeholder="password" 
                    value={password}
                    onChange={(e) => 
                      setPassword(e.target.value)}
                  />
                <button>Register</button>

              </form>
          </div>
    
  )
}
export default Register