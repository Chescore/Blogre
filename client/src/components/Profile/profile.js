import React from 'react';
import ProfileArticles from './profile_articles';
import ProfileUser from './profile_user';

const Profile = () => {
    return (
        <div>
            {<ProfileUser/>}
            {<ProfileArticles/>}
        </div>
    );
};

export default Profile;