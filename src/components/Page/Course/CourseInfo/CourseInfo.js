import React from 'react';
import { UserIcon, StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CourseInfo = ({courseSummary}) => {

    const {title, rating, total_student, image_url,_id} = courseSummary;

    return (
        <div className='mt-5'>
           <div className='border rounded-md p-5 bg-slate-100'>
            <div><img className=' inline-block' src={image_url} alt="" /></div>
           <div>
           <div className='flex justify-between items-center mt-2'>
           <h1 className='inline-block text-sky-700 font-semibold text-xl '>{title}</h1>
           <Link to={`/details/${_id}`}><button className="custom-button border bg-sky-700 rounded-md p-1 font-semibold text-xl text-white">More Info</button></Link>
           </div>
           <div className='flex items-center'>
           <p className='text-sky-700 font-semibold'><span className=''>Rating: </span>{rating.number}</p><StarIcon className="h-4 w-4 ml-1 text-yellow-500"/></div>
           <div className='flex items-center'>
           <p className='text-sky-700 font-semibold'>Total Student: {total_student}</p><UserIcon className="h-4 w-4 ml-1 text-blue-500"/>
           </div>
           </div>
           </div>
        </div>
    );
};

export default CourseInfo;