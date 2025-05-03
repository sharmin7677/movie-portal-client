import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;