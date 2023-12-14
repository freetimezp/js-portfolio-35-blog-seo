import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import profileImg from '../../../public/profile-img.png';

const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark dark:text-light'>
            <div className='md:w-16 w-12 rounded-full overflow-hidden border border-solid border-dark
                mr-2 md:mr-4 dark:border-light/50'>
                <Image src={profileImg} alt="Logo" className='w-full h-auto rounded'
                    sizes='33vw' priority />
            </div>
            <span className='font-bold text-lg md:text-xl dark:font-semibold'>FreeTime</span>
        </Link>
    );
};

export default Logo;
