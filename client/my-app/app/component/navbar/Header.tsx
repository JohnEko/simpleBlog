
import Link from 'next/link'
import React from 'react'
 
 const Header = () => {
   return (
      <header>

                <Link href={"/"} className="logo">NaijaForum</Link>
                 {/* wecan create a login page different but for this 
                 tutorial we create it here */}
                  <nav>
                    <Link href={"/login/"}>
                     Login
                    </Link>
                    
                    <Link href={"register/"}>
                        Register
                    </Link>
                 </nav>
                 
            </header>
   )
 }
  export default Header
 