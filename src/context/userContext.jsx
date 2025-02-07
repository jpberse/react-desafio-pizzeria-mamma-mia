import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [token, setToken] = useState(true);
 console.log(token)

 const logout = () => {
    setToken(false)
 }
 return (
    <UserContext.Provider 
        value={{ 
            token, 
            logout
        }}>
        {children}
    </UserContext.Provider>
 );
};