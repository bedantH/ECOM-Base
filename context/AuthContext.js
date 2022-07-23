import { useState, useContext, createContext } from "react";

const AuthProvider = createContext();

export const AuthContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [isValidUser, setIsValidUser] = useState(false)

    const values = { user, setUser, isValidUser, setIsValidUser }
    return (
        <AuthProvider.Provider value={values}>
            {children}
        </AuthProvider.Provider>
    )
}

export function useAuth() {
    return useContext(AuthProvider)
}