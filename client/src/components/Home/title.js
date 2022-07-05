import React from 'react';
import logo from '../../img/logo.png'

const Title = () => {
    return (
        <div className='py-2'>
            <img className='w-32 md:w-40' src={logo} alt='Blogre Logo'/>
        </div>
    );
};

export default Title;