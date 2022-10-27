import React, { useContext } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

        const handleLogOut = () =>{
            logOut()
            .then(() => {})
            .catch((error) => console.error(error))
        }

    return (
        <nav className='py-2 border-b border-b-stone-500'>
            <div className="navbar bg-base-100 flex justify-center items-center">
                <div className="navbar-start">
                    <Link to='/'><h1 className='text-xl p-3 rounded-lg bg-sky-700 text-white font-bold'>কোর্স বিডি</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/'>হোম</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/courses'>কোর্সেস</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/faq'>FAQ</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/blog'>ব্লগ</Link></li>
                        {
                            user?.uid ?
                                <>
                                <li><p className='text-gray-300 ml-6 text-lg'>{user?.displayName}
                                </p></li>
                                <li><Link onClick={handleLogOut} className='ml-6 text-lg font-bold rounded-lg bg-sky-700 py-1 text-white'>লগ আউট</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className='text-gray-300 ml-6 text-lg' to='/login'>লগ ইন</Link></li>
                                    <li><Link className='ml-6 text-lg font-bold rounded-lg bg-sky-700 py-1 text-white' to='/signup'>সাইন আপ</Link></li>
                                </>
                        }
                        <input type="checkbox" className="toggle" checked />

                    </ul>
                </div>
                <div className="lg:hidden dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Bars3Icon className=" lg:hidden xl:hidden 2xl:hidden h-10 w-10 text-blue-500" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-700 rounded-box w-52">
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/'>হোম</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/courses'>কোর্সেস</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/faq'>FAQ</Link></li>
                        <li><Link className='text-gray-300 ml-6 text-lg' to='/blog'>ব্লগ</Link></li>
                        {
                            user?.uid ?
                                <>
                                <li><p className='text-gray-300 ml-6 text-lg'>{user?.displayName}
                                </p></li>
                                <li><Link onClick={handleLogOut} className='ml-6 text-lg font-bold rounded-lg bg-sky-700 py-1 text-white'>লগ আউট</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className='text-gray-300 ml-6 text-lg' to='/login'>লগ ইন</Link></li>
                                    <li><Link className='ml-6 text-lg font-bold rounded-lg bg-sky-700 py-1 text-white' to='/signup'>সাইন আপ</Link></li>
                                </>
                        }
                        <input type="checkbox" className="toggle" checked />
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;