import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10 lg:mx-28 md:mx-28 text-xl my-10'>
            <div className=''>
                <h1 className='text-2xl mb-2'>1. What is Cors?</h1>
                <p className='mb-5'>Ans: CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
            </div>


            <div className=''>
            <h1 className='text-2xl mb-2'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='mb-5'>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. 12 User Authentication Platforms Auth0, Firebase Alternatives STYTCH. Ory. Supabase. Okta. PingIdentity. Keycloak. Frontegg. Authress.</p>
                </div>

            <div className=''>
            <h1 className='text-2xl mb-2'> 3. How does the private route work?</h1>
                <p className='mb-5'>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in</p>
            </div>

            <div className=''>
                <h1 className='text-2xl mb-2'> 4. What is Node? How does Node work?</h1>
               <p className='mb-5'> Ans: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
               </div>

        </div>
    );
};

export default Blog;