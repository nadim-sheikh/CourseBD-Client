import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://server-55.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return ( 
            <div className=' lg:flex md:flex justify-center lg:mt20 lg:mb-20 md:mt-20 md:mb-20'>
                {
                    categories.map(category => <p className='mt-6 ml-5' key={category.id}>
                        <Link className='lg:ml-5 mb:ml-5 bg-sky-700 px-3 py-2 rounded-md text-white' to={`/courses/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
    );
};

export default TopCategory;