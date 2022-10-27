import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid'

const CourseDetails = () => {
    const detail = useLoaderData();
    const { title, price, image_url, total_student, rating, details } = detail;
    return (
        <div className='mx-10 md:mx-28 lg:mx-28 md:mt-10 lg:mt-10 md:mb-28 lg:mb-28 rounded-md border md:p-10 lg:p-10 p-5 grid lg:grid-cols-2 gap-[1%]'>
            <div className=''>
                <img className='rounded-md lg:w-full' src={image_url} alt="" />
            </div>
            <div className='lg:ml-10 mt-10 '>
                <div>
                    <h1 className='font-semibold text-2xl text-white mb-5'>{title}</h1>
                    <h1 className='font-semibold text-2xl text-white mb-5'>{price}</h1>
                </div>
                <div className='rounded-md p-5 bg-sky-700'>
                    <h1 className='text-white text-xl font-semibold'>কোর্সের বিবরণ</h1>
                    <hr className='mb-5' />
                    <p className='text-white '>{details}</p>
                </div>
                <div className='rounded-md p-5 bg-sky-700 mt-5 flex justify-between items-center'>
                    <div>
                        <div className='flex items-center'>
                            <p className='text-white'>ছাত্র-ছাত্রীর সংখ্যা:  {total_student}</p><UserIcon className="h-4 w-4 ml-1 text-white" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="my-modal" className="btn modal-button border rounded p-2 text-white hover:text-sky-700 hover:bg-white">চেক আউট</label>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-2">{title}</h3>
                                <div className=''>
                                    <img className='rounded-md lg:w-full' src={image_url} alt="" />
                                </div>
                                <p className="py-4">{details}</p>
                                <p className="py-4 text-xl">Price: {price}</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">Buy Now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;