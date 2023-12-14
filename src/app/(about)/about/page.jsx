import React from 'react';
import AboutCiverSection from '../../../components/About/AboutCiverSection';
import Skills from '../../../components/About/Skills';
import Link from 'next/link';

export const metadata = {
    title: "About Me",
    description: "Some info about my self",
}

const AboutPage = () => {
    return (
        <>
            <AboutCiverSection />
            <Skills />

            <h2 className='mt-8 font-semibold text-lg md:text-2xl self-start
                px-5 xs:px-10 sm:px-12 md:px-16 lg:px-20 text-dark dark:text-light'>
                Have a project in mind? Reach out to me 📞 from {" "}
                <Link href="/contact" className='!underline underline-offset-2
                    dark:text-accentDark'>
                    here</Link> and let's make it happen.
            </h2>
        </>
    );
};

export default AboutPage;
