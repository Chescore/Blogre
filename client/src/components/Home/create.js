import React from 'react';
import {Link} from 'react-router-dom';

const Create = () => {
    return (
        <div className='flex text-slate-400'>
            <Link to='/post' className='hover:text-slate-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            <div className='font-cormorant font-bold px-2'>
                Click here to add your own article
            </div>
        </div>
    );
};

export default Create;