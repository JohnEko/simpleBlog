'use client'

import Router, { useRouter } from "next/router"
import React, {useState, useEffect} from "react"
import "./login.css"


const Login = () => {
  // const router = useRouter()
  return (
    
          <div>
            
              <form className="login" action="">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button>Login</button>

              </form>
          </div>
    
  )
}
export default Login