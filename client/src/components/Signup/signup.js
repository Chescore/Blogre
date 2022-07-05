import axios from 'axios';
import React,{useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../hoc/auth';
import makeToast from '../../Toaster';

const Signup = () => {
    const {getLoggedIn} = useContext(AuthContext)

    const {handleSubmit, register, formState:{errors}} = useForm();

    const navigate = useNavigate()

    const [authDetails,setAuthDetails] = useState({
        username:'',
        email:'',
        password:'',
        passwordConfirmation:''
    })

    const onSubmit = async() =>{
        try{
            await axios.post('http://localhost:8000/register',authDetails)
            await getLoggedIn()
            navigate('/')
        }catch(err){
            makeToast('error',err.response.data)
        }
    }

    return(
        <div className='p-8 font-serif shadow-2xl m-4 bg-slate-50 max-w-md'>
            <div className='font-bold text-2xl text-center'>
                Create a new Account
            </div>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-6'>
                    <div className='py-2'>
                        <label className='inline-block mb-2 text-sm'>Username</label>
                        <input type='text'
                            {...register("username",{required:{
                                value:true,message:"Your username is required"
                            }})}
                            className='block w-full px-4 py-3 text-sm font-spectral 
                            bg-clip-padding border border-solid border-slate-400 rounded transition 
                            ease-in-out m-0 focus:border-sky-400 focus:outline-none placeholder:text-slate-200'
                            placeholder='Username'
                            onChange={(e)=>setAuthDetails({...authDetails,username:e.target.value})}
                            value={authDetails.username}/>
                        <div className='font-cormorant text-red-700'>
                            {errors?.username?.message}
                        </div>
                    </div>
                    <div className='py-2'>
                        <label className='inline-block mb-2 text-sm'>Email</label>
                        <input type='text'
                            {...register("email",{required:{
                                value:true,message:"Your email address is required"
                            },pattern:{
                                value:/@gmail.com|@yahoo.com|@hotmail.com|@live.com/,message:'Invalid email address'
                            }})} 
                            className='block w-full px-4 py-3 text-sm font-spectral 
                            bg-clip-padding border border-solid border-slate-400 rounded transition 
                            ease-in-out m-0 focus:border-sky-400 focus:outline-none placeholder:text-slate-200'
                            placeholder='Email address'
                            onChange={(e)=>setAuthDetails({...authDetails,email:e.target.value})}
                            value={authDetails.email}/>
                        <div className='font-cormorant text-red-700'>
                            {errors?.email?.message}
                        </div>
                    </div>
                    <div className='py-2'>
                        <label className='inline-block mb-2 text-sm'>Password</label>
                        <input type='password' 
                            {...register("password",{
                                required:{value:true,message:'Create a new password'}
                            })}
                            className='block w-full px-4 py-3 text-sm font-spectral 
                            bg-clip-padding border border-solid border-slate-400 rounded transition 
                            ease-in-out m-0 focus:border-sky-400 focus:outline-none placeholder:text-slate-200'
                            placeholder='Create new password'
                            onChange={(e)=>setAuthDetails({...authDetails,password:e.target.value})}
                            value={authDetails.password}/>
                        <div className='font-cormorant text-red-700'>
                            {errors?.password?.message}
                        </div>
                    </div>
                    <div className='py-2'>
                        <label className='inline-block mb-2 text-sm'>Confirm password</label>
                        <input type='password'
                            {...register("passwordConfirmation",{
                                required:{value:true,message:'Verify the password entered'}
                            })} 
                            className='block w-full px-4 py-3 text-sm font-spectral 
                            bg-clip-padding border border-solid border-slate-400 rounded transition 
                            ease-in-out m-0 focus:border-sky-400 focus:outline-none placeholder:text-slate-200'
                            placeholder='Verify your password'
                            onChange={(e)=>setAuthDetails({...authDetails,passwordConfirmation:e.target.value})}
                            value={authDetails.passwordConfirmation}/>
                        <div className='font-cormorant text-red-700'>
                            {errors?.passwordConfirmation?.message}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Link to='/login'><label className='text-base font-cormorant text-slate-400 tracking-wider cursor-pointer hover:text-slate-600 active:text-slate-800'>Existing account? Log in</label></Link>
                        <button type='submit' className='mx-8 my-4 select-none border-blue-800 hover:bg-blue-800 hover:text-slate-50 border-2 text-blue-800 font-spectral font-bold text-sm cursor-pointer text-center py-2 px-4'>Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Signup;