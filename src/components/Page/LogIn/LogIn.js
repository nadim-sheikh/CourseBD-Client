import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {signIn} = useContext(AuthContext);

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
    }

    return (
        <div className=' mt-20 w-3/4 h-full lg:w-[500px] md:w-[500px] pb-12 rounded border-2 border-stone-500 m-auto'>
          <h1 className='text-white text-center text-2xl lg:text-4xl md:text-4xl my-10 font-bold'>লগইন করুন</h1>

          <form onSubmit={handleSubmit} className='mx-20'>
              <div className='mb-2'>
              <label className='block text-xl mb-2' htmlFor="email">ইমেল</label>
              <input className='text-sky-500 rounded py-2 pl-2 w-full outline-none' type="email" name="email" id="" placeholder='ইমেল লিখুন'/>
              </div>
              <div className='mb-5'>
              <label className='block text-xl mb-2' htmlFor="password">পাসওয়ার্ড</label>
              <input className='text-sky-500 rounded py-2 pl-2 w-full mb-3 outline-none' type="password" name="password" id="" placeholder='পাসওয়ার্ড লিখুন' />
              <Link className='underline' to='/signup'><p>একাউন্ট তৈরি করুন!</p></Link>
              </div>
              <button className='mb-5 bg-sky-700 text-white text-xl w-full rounded pt-1 pb-2 font-semibold m-auto'>লগইন</button>
          </form>

        </div>
    );
};

export default LogIn;