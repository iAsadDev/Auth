import { createContext, useEffect, useState } from "react";
import { getToken, removeToken } from "../utils/auth";
import axios from "axios";
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const token = getToken();
        if(token) {
            axios.get('http://localhost:4000/api/auth/', {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then((res) =>{
                isAuthenticated(true),
                setUser(res.data.user),
                setLoading(false)
            })
            .catch(() => {
                removeToken();
                setIsAuthenticated(false);
                setUser(null)
                setLoading(false);
            });
        }
        else{
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
        }
    }, []);
    const logout = () => {
        removeToken();
        setIsAuthenticated(false);
        setUser(null);
    }
    const loginSuccess = (userData) => {
        setIsAuthenticated(true);
        setLoading(false);
        setUser(userData)
    }

    

    return(
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, loading, setLoading, loginSuccess , logout }}>
            {children}
        </AuthContext.Provider>
    )
 }