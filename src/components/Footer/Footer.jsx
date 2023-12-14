"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon } from '../Icons';
import Link from 'next/link';

import siteMetadata from '../../utils/siteMetadata';

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    //console.log(errors);

    return (
        <footer className='mt-16 rounded-2xl bg-dark dark:bg-accentDark/30 m-5 sm:m-10 flex 
            flex-col items-center text-light'>
            <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl 
                sm:text-3xl lg:text-4xl px-4'>
                Interesting Stories | Updates | Guides
            </h3>
            <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium 
                text-sm sm:text-base'>
                Subscribe to learn about new technology and updates. Join
                over 5000+ members community to stay up to date with latest news.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2
                rounded mx-4 dark:bg-dark'
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("Email", { required: true })}
                    className="w-full bg-transparent text-dark focus:border-dark 
                    focus:ring-0 border-0 border-b mr-2 pb-1 pl-2 sm:pl-0"
                />

                <input
                    type="submit"
                    value="Send"
                    className='bg-dark text-light cursor-pointer font-medium rounded 
                    px-3 sm:px-5 py-1 dark:text-dark dark:bg-light'
                />
            </form>

            <div className='flex items-center mt-8'>
                <a href={siteMetadata.linkedin || "#"} className='inline-block w-6 h-6 mr-4'>
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href={siteMetadata.twitter || "#"} className='inline-block w-6 h-6 mr-4'>
                    <TwitterIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
                <a href={siteMetadata.github || "#"} className='inline-block w-6 h-6 mr-4'>
                    <GithubIcon className="hover:scale-125 transition-all ease duration-300 fill-light" />
                </a>
                <a href={siteMetadata.dribbble || "#"} className='inline-block w-6 h-6 mr-4'>
                    <DribbbleIcon className="hover:scale-125 transition-all ease duration-300" />
                </a>
            </div>

            <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light 
                py-6 px-8 flex flex-col md:flex-row items-center justify-between'>
                <span className='text-center'>
                    &copy; 2023 FreeTime. All Rights Reserved.
                </span>
                <Link href="/sitemap.xml" className='text-center underline my-4 md:my-0'>
                    sitemap.xml
                </Link>
                <div className='text-center'>
                    Made with &hearts; by {" "}
                    <a href="https://www.youtube.com/watch?v=WS6DNSZBNbM" className='underline'>
                        FreeTime
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
