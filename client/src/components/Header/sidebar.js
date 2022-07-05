import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../hoc/auth';
import Logout from '../Logout/logout';

const Header = () => {
    const {loggedIn} = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center h-screen p-2 mx-1 mr-3 rounded-xs overflow-y-auto bg-gradient-to-br from-sky-200 to-violet-400 shadow-xl'>
            <aside>
                <ul className='text-slate-500'>
                    {loggedIn===false?
                    <>
                        <li className='py-3'>
                            <NavLink to='/' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className='py-3'>
                            <NavLink to='/search' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>                        
                            </NavLink>
                        </li>
                        <li className='py-3'>
                            <NavLink to='signup' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className='py-3'>
                            <NavLink to='login' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </NavLink>
                        </li>
                    </>
                    :
                    <>
                    <li className='py-3'>
                        <NavLink to='/' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='/post' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-slate-800" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='/search' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>                        
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='/notifications' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>                        
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='profile' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='signup' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <NavLink to='login' style={({isActive})=>(isActive?{color:'darkblue'}:{color:'slategrey'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className='py-3'>
                        <Logout/>
                    </li>
                    </>
                    }
                </ul>
            </aside>
        </div>
    );
};

export default Header;