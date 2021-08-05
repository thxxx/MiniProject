
import React, { createContext, useState } from 'react'

export const UserContext = createContext({});

const UserStore = (props) => {
    const [users, setUsers] = useState({})

    // props.children을 이용해서 하위 컴포넌트들을 렌더링.
    return ( 
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider> 
    )
}

export default UserStore;