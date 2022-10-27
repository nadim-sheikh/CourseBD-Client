import React from 'react';

const Home = () => {
    return (
        <div className='mt-5 md:flex md:justify-center lg:flex justify-center items-center mx-20'>
            <div>
                <h1 className='md:text-4xl lg:text-7xl font-bold text-white'>Complete Freelancing <br /> Skill Development Course</h1>
                <p className='text-white mt-5 lg:text-xl'>একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল হওয়ার জন্য যা যা লাগবে তার <br /> সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে আমাদের কোর্সে।</p>
                <button className='bg-sky-700 text-white text-xl rounded pt-1 pb-2 px-5 mt-5 font-semibold m-auto'>Enroll Now</button>
            </div>
            <div>
                <img src='https://i.postimg.cc/zBt2MwjB/1622955725643.png' alt="" />
            </div>
        </div>
    );
};

export default Home;