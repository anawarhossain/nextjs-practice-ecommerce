import Link from 'next/link';
import React from 'react';

const NotFountPage = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h1>404</h1>
            <h1>Not Found Page</h1>
            <button className='btn btn-success rounded-lg'><Link href={'/'}>Back to home</Link></button>
        </div>
    );
};

export default NotFountPage;