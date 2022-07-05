import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import ArticleItem from './components/Home/articleitem';
import Profile from './components/Profile/profile';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import PostArticle from './components/Post/article';
import Search from './components/Search/search';
import Notifications from './components/Notifications/notifications';
import AuthContext from './hoc/auth';

const Router = () => {
    const {loggedIn} = useContext(AuthContext)

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:id' element={<ArticleItem/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                {loggedIn===true?
                <>
                    <Route path='/post' element={<PostArticle/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </>
                :
                <>
                </>
                }
            </Routes>
        </div>
    )
};

export default Router;