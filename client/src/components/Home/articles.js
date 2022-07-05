import axios from 'axios';
import _ from 'lodash'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles,setArticles] = useState([])

    const showArticles = ()=>{
        return articles.map((item,i)=>{
            return(
                <Link key={i} to={`/${item._id}`}>
                    <div className='font-cormorant border-b-2 py-4 px-4 my-4 shadow hover:bg-slate-100'>
                        <div className='flex justify-center text-slate-700'>
                            <div>
                                <div>Author: <span className='uppercase font-spectral text-slate-400'>{item.creatorName}</span></div>
                                <div>Category: <span className='font-spectral text-slate-400'>{item.categoryName}</span></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex text-slate-400'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <div>
                                    {item.tags.map((tag,i)=>{
                                        return(<div key={i}>#{tag}</div>)
                                    })}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex text-slate-400'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h- w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>                                
                                    </div>
                                    <div>
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center font-spectral uppercase font-bold py-4'>
                            {item.title}
                        </div>
                        <div className='text-slate-500 text-base'>
                            {_.truncate(item.description,{
                                'length':240
                            })}
                        </div>
                        <div className='flex pt-2'>
                            <div className='flex text-slate-400'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 md:h-6 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg> 
                            </div>
                                <div className='md:text-base'>
                                    {item.likes}
                                </div>
                            </div>
                            <div className='flex text-slate-400 px-4'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 md:h-6 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div className='md:text-base'>
                                    {item.noOfComments}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            )
        })
    }

    const getArticles = async()=>{
        try{
            const response = await axios.get('http://localhost:8000')
            setArticles(response.data)        
        }catch(err){
            console.log(err.response.data)
        }
    }

    useEffect(()=>{
        getArticles()
    },[])

    return (
        <div className='text-sm'>
           {showArticles()}
        </div>
    );
};

export default Articles;