import React from 'react';
import Sidebar from '../components/Header/sidebar';
import Title from '../components/Home/title'

const Layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='fixed'><Sidebar/></div>
            <div className='flex flex-col ml-12 mr-4'>
                <Title/>
                {children}
            </div>
        </div>
    );
};

export default Layout;