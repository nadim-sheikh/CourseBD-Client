import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../CourseInfo/CourseInfo';

const CourseS = () => {
    const singleCourse = useLoaderData();
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[1%]'>
            {
                singleCourse.map(courseSummary => <CourseInfo key={courseSummary._id} courseSummary={courseSummary}/> )
            }
        </div>
    );
};

export default CourseS;