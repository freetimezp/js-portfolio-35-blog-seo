import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import profileImg from '../../../public/profile-img.png';

const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark dark:text-light'>
            <div className='w-16 rounded-full overflow-hidden border border-solid border-dark
                mr-4 dark:border-light'>
                <Image src={profileImg} alt="Logo" className='w-full h-auto rounded' />
            </div>
            <span className='font-bold text-xl dark:font-semibold'>FreeTime</span>
        </Link>
    );
};

export default Logo;
