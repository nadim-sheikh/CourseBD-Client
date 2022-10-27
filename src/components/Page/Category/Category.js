import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../Course/CourseInfo/CourseInfo';

const Category = () => {
    const all = useLoaderData()
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[1%]'>
            {
                all.map(category => <CourseInfo key={category._id} courseSummary={category} />)
            }
        </div>
    );
};

export default Category;