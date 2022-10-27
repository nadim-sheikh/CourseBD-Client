import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';



const SignUp = () => {
    const navigate = useNavigate()

    const {providerLogin,createUser, updateUserProfile} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
        })
        .catch(error => console.error(error))
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, photoURL)
            navigate('/login')
        })
        .catch(error => console.error(error));
    }

    const handleUpdateUserProfile = (name, photoURL)  =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    return (
        <div className=' mt-20 w-3/4 h-full lg:w-[500px] md:w-[500px] pb-12 rounded border-2 border-stone-500 m-auto'>
          <h1 className='text-white text-center text-2xl lg:text-4xl md:text-4xl my-10 font-bold'>সাইন আপ করুন</h1>

          <form onSubmit={handleSubmit} className='mx-20'>
          <div className='mb-2'>
              <label className='block text-xl mb-2' htmlFor="name">নাম</label>
              <input className='text-sky-700 rounded py-2 pl-2 w-full outline-none' type="text" name="name" id="" placeholder='নাম লিখুন'/>
              </div>
              <div className='mb-2'>
              <label className='block text-xl mb-2' htmlFor="email">ইমেল</label>
              <input className='text-sky-500 rounded py-2 pl-2 w-full outline-none' type="email" name="email" id="" placeholder='ইমেল লিখুন'/>
              </div>
              <div className='mb-2'>
              <label className='block text-xl mb-2' htmlFor="photoURL">ছবির লিংক</label>
              <input className='text-sky-500 rounded py-2 pl-2 w-full outline-none' type="text" name="photoURL" id="" placeholder='ছবির লিংক'/>
              </div>
              <div className='mb-5'>
              <label className='block text-xl mb-2' htmlFor="password">পাসওয়ার্ড</label>
              <input className='text-sky-500 rounded py-2 pl-2 w-full mb-3 outline-none' type="password" name="password" id="" placeholder='পাসওয়ার্ড লিখুন' />
              <Link className='underline' to='/login'><p>ইতিমধ্যে একটি একাউন্ট আছে</p></Link>
              </div>
              <button className='mb-5 bg-sky-700 text-white text-xl w-full rounded pt-1 pb-2 font-semibold m-auto'>সাইন আপ</button>
              <div className='flex justify-center'>
              <button onClick={handleGoogleSignIn} className=' bg-white rounded-xl w-[50px]'><Link><img className='' src="https://i.postimg.cc/d3FTsvf7/logo.png" alt="" /></Link></button>
              <button className='ml-5 bg-white rounded-xl w-[50px]'><Link><img className='rounded-xl' src="https://i.postimg.cc/Gt7RtxpW/logo2.png" alt="" /></Link></button>
              </div>
          </form>

        </div>
    );
};

export default SignUp;