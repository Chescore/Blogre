import React from 'react';
import Articles from './articles';
import Create from './create';

const Home = () => {
    return (
        <div>
            {<Create/>}
            {<Articles/>}
        </div>
    );
};

export default Home;