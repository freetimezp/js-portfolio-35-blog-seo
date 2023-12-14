import React from 'react';

const SkillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "Gatsby.js",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
];

const Skills = () => {
    return (
        <section className='w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 
            border-b-2 border-solid border-dark dark:border-light text-dark 
            dark:text-light'>
            <span className='font-semibold text-lg sm:text-3xl md:text-4xl text-accent 
                dark:text-accentDark'>
                I'm comfortable in...
            </span>

            <ul className='flex flex-wrap mt-8 justify-center sm:justify-start'>
                {SkillList.map((item, index) => (
                    <li key={index} className='font-semibold inline-block capitalize text-lg 
                        md:text-2xl 
                        py-3 sm:py-5 px-6 md:px-12 border-2 border-solid border-dark 
                        dark:border-light rounded mr-4 mb-4 md:mr-6 md:mb-6 
                        hover:scale-110 transition-all ease duration-500 cursor-pointer'>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
