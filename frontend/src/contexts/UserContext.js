import React, { useState } from 'react'

const Context = React.createContext({})
const initialValues = {
    jwt : window.localStorage.getItem('jwt') || '',
    userData : {}
}

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(initialValues)

    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export default Context