import React from 'react';
import { Outlet } from 'react-router-dom';
import TopCategory from './TopCategory/TopCategory';

const Course = () => {
    return (
        <div>
            {/* Course Catagories */}
            <div className='text-center'>  
                <TopCategory/>             
            </div>
            {/* All Course Card*/}
            <div className='lg:mx-28 md:mx-28 mt-10 mx-10 md:my-28 lg:my-28'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Course;