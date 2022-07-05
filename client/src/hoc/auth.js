import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext();

const Auth = ({children}) => {
    const [loggedIn,setLoggedIn] = useState(undefined)
    console.log(loggedIn)

    const getLoggedIn = async() =>{
        try{
            const response = await axios.get('http://localhost:8000/loggedIn')
            setLoggedIn(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getLoggedIn()       
    },[])

    return (
        <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export { Auth }
export default AuthContext