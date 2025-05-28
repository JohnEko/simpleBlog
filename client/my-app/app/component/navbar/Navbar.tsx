import Link from "next/link"
import "./navbar.css"


const Navbar =() => {

    return(
        
            <header>

                <Link href={"/"} className="Logo">NaijaForum</Link>
                 {/* wecan create a login page different but for this 
                 tutorial we create it here */}
                  <nav>
                    <Link href={"/login"}>
                     Login
                    </Link>
                    
                    <Link href={"/register"}>
                        Register
                    </Link>
                 </nav>
                 
            </header>

       
    )
}
export default Navbar