import { createContext, useState } from "react";


export const AccountContext=createContext(null)

const AccountProvider =({children}) =>{

    const [user,setuser] = useState()

    
    
    

    return(
        <AccountContext.Provider value={{
           user,
           setuser
            
        }} >
           {children}
         </AccountContext.Provider>
        
    )
}

export default AccountProvider;