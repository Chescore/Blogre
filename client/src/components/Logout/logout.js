import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../hoc/auth';

const Logout = () => {
    const {getLoggedIn} = useContext(AuthContext)

    const navigate = useNavigate()

    const logout = async(req,res)=>{
        try{
            await axios.get('http://localhost:8000/logout')
            await getLoggedIn()
            navigate('/')
        }catch(err){
            console.log(err.response.data)
        }
    }

    return (
        <button onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        </button>
    );
};

export default Logout;