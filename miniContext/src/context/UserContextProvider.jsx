import React from "react";
import UserContext from "./UserContextx";

const UserContextProvide=({children})=>{
    const [user,setUser]= React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export default UserContextProvide