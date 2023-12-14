"use client"
import { cx } from '../../utils';
import Link from 'next/link';
import Logo from './Logo';

import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon, SunIcon, MoonIcon } from '../Icons';

import siteMetadata from '../../utils/siteMetadata';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { useState } from 'react';

const Header = () => {
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);

    const toggleClick = () => {
        setClick(!click);
    }

    return (
        <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
            <Logo />

            <button className='inline-block sm:hidden z-50 mr-3 sm:mr-0' onClick={toggleClick}>
                <div className='w-6 cursor-pointer transition-all ease duration-300'>
                    <div className="relative">
                        <span className='absolute top-0 inline-block w-full h-0.5 bg-dark 
                        dark:bg-light rounded transition-all ease duration-200'
                            style={{
                                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0) translateY(6px)"
                            }}
                        >&nbsp;</span>
                        <span className='absolute top-0 inline-block w-full h-0.5 bg-dark 
                        dark:bg-light rounded transition-all ease duration-200'
                            style={{
                                opacity: click ? 0 : 1
                            }}
                        >&nbsp;</span>
                        <span className='absolute top-0 inline-block w-full h-0.5 bg-dark 
                        dark:bg-light rounded transition-all ease duration-200'
                            style={{
                                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0) translateY(-6px)"
                            }}
                        >&nbsp;</span>
                    </div>
                </div>
            </button>

            <nav className='w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full
                font-medium capitalize flex sm:hidden items-center gap-4 fixed top-6 right-1/2 
                translate-x-1/2 bg-light/80 backdrop-blur-lg z-50 transition-all ease duration-700'
                style={{
                    top: click ? "1rem" : "-5rem",
                    opacity: click ? "1" : "0",
                }}
            >
                <Link href="/" className='hover:text-accent'>Home</Link>
                <Link href="/about" className='hover:text-accent'>About</Link>
                <Link href="/contact" className='hover:text-accent'>Contact</Link>
                <button onClick={() => setMode(mode === 'light' ? "dark" : "light")}
                    className={cx("w-6 h-6 ease ml-2 flex items-center justify-center p-1 rounded-full", mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark')}>
                    {mode === 'light' ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-light" />}
                </button>
            </nav>

            <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full
                font-medium capitalize hidden sm:flex items-center gap-4 fixed top-6 right-1/2 
                translate-x-1/2 bg-light/80 backdrop-blur-lg z-50'>
                <Link href="/" className='hover:text-accent'>Home</Link>
                <Link href="/about" className='hover:text-accent'>About</Link>
                <Link href="/contact" className='hover:text-accent'>Contact</Link>
                <button onClick={() => setMode(mode === 'light' ? "dark" : "light")}
                    className={cx("w-8 h-8 ease ml-2 flex items-center justify-center p-1 rounded-full", mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark')}>
                    {mode === 'light' ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-light" />}
                </button>
            </nav>

            <div className='hidden sm:flex items-center'>
                <a href={siteMetadata.linkedin} className='inline-block w-6 h-6 mr-4'>
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href={siteMetadata.twitter} className='inline-block w-6 h-6 mr-4'>
                    <TwitterIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href={siteMetadata.github} className='inline-block w-6 h-6 mr-4'>
                    <GithubIcon className="hover:scale-125 transition-all ease duration-300 
                    dark:fill-light" />
                </a>
                <a href={siteMetadata.dribbble} className='inline-block w-6 h-6 mr-4'>
                    <DribbbleIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
            </div>
        </header >
    );
};

export default Header;
