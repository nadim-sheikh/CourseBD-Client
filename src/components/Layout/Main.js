import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;