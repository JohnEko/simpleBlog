
import { createContext, useState } from "react"




export const UserContext = createContext({})


export function UserContextProvider({children} : any) {
  const [userInfo, setUserInfo] = useState({})
  return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
          {children}
        </UserContext.Provider>
  )
}




// 'use client'

// import { useRouter } from "next/navigation"


// const logout = () =>{
//   const router = useRouter()

//    const logout = () => {
//     fetch('http://localhost:4000/logout', {
//       credentials: 'omit', 
//       method: 'POST'
//   })
//    router.push('/');
// };

//   return(
//           <p className="flex item-center">You Can login again</p>
// )
// }

// export default logout

