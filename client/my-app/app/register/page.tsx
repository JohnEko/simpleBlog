'use client'

import Router, { useRouter } from "next/router"
import React, {useState, useEffect} from "react"
import "./register.css"

const Register = () => {
  // const router = useRouter()
  return (
          <div>
            
              <form className="register" action="">
                <h1>Register</h1>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button>Register</button>

              </form>
          </div>
    
  )
}
export default Register