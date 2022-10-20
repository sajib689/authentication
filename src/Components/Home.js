import React from 'react';
import UserContext from '../Contexts/UserContext';

const Home = () => {
    const {user} = UserContext(UserContext)
    return (
        <div>
            <h3>This is home {user?.email}</h3>
        </div>
    );
};

export default Home;