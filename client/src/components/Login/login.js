import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AuthContext from '../../hoc/auth';
import makeToast from '../../Toaster';
// import {GoogleLogin} from 'react-google-login'

const Login = () => {
    const {getLoggedIn} = useContext(AuthContext)

    const navigate = useNavigate()

    const {handleSubmit, register, formState:{errors}} = useForm()

    const [error,setError] = useState(null);
    console.log(error);

    const [authDetails, setAuthDetails] = useState({
        email:'',
        password:''
    })

    const onSubmit = async() =>{
        try{
            await axios.post("http://localhost:8000/login", authDetails)
            await getLoggedIn()
            navigate('/')
        }catch(err){
            console.log(err.response.data);
        }
    }

    // const responseSuccessGoogle = async(response) => {
    //     try{
    //         console.log(response)
    //         await axios.post('http://localhost:8000/googlelogin',{tokenId: response.tokenId})
    //         await getLoggedIn()
    //         navigate('/')
    //     }catch(err){
    //         setError(err.response.data)
    //     }
    // }

    // const responseErrorGoogle = (response) => {
    //     console.log(response)
    // }

    return (
        <div className='block p-8 shadow-2xl font-serif m-4 bg-slate-50 max-w-md'>
            <div className='font-bold text-2xl text-center'>
                Sign in to your Account
            </div>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-6'>
                    <div className='py-4'>
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
                                required:{value:true,message:'Your password is required'}
                            })} 
                            className='block w-full px-4 py-3 text-sm font-spectral 
                            bg-clip-padding border border-solid border-slate-400 rounded transition 
                            ease-in-out m-0 focus:border-sky-400 focus:outline-none placeholder:text-slate-200'
                            placeholder='Password'
                            onChange={(e)=>setAuthDetails({...authDetails,password:e.target.value})}
                            value={authDetails.password}/>
                            <div className='font-cormorant text-red-700'>
                                {errors?.password?.message}
                            </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Link to='/signup'><label className='text-base font-cormorant text-slate-400 tracking-wider cursor-pointer hover:text-slate-600 active:text-slate-800'>Don't have an account? Sign up</label></Link>
                    <button type='submit' className='mx-8 my-4 select-none border-blue-800 hover:bg-blue-800 hover:text-slate-50 border-2 text-blue-800 font-spectral font-bold text-sm cursor-pointer text-center py-2 px-4'>Login</button>
                </div>
            </form>
            {/* <div className='text-center pointer'>
                <GoogleLogin
                    clientId="325429714633-r5a1rkk8g3hm56gemlkp0a82boh40dlj.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                />            
            </div> */}
        </div>
    );
};

export default Login;