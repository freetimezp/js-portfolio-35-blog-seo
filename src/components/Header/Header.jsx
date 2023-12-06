import Link from 'next/link';
import Logo from './Logo';

import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon, SunIcon } from '../Icons';

const Header = () => {
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
            <Logo />

            <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full
                font-medium capitalize flex items-center gap-4 fixed top-6 right-1/2 translate-x-1/2
                bg-light/80 backdrop-blur-lg z-50'>
                <Link href="/" className='hover:text-accent'>Home</Link>
                <Link href="/about" className='hover:text-accent'>About</Link>
                <Link href="/contact" className='hover:text-accent'>Contact</Link>
                <button>
                    <SunIcon />
                </button>
            </nav>

            <div>
                <a href="http://example.com" className='inline-block w-6 h-6 mr-4'>
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href="http://example.com" className='inline-block w-6 h-6 mr-4'>
                    <TwitterIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href="http://example.com" className='inline-block w-6 h-6 mr-4'>
                    <GithubIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href="http://example.com" className='inline-block w-6 h-6 mr-4'>
                    <DribbbleIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
            </div>
        </header>
    );
};

export default Header;
