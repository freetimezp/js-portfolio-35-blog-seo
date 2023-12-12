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

            <h2 className='mt-8 font-semibold text-2xl self-start mx-20 text-dark'>
                Have a project in mind? Reach out to me 📞 from {" "}
                <Link href="/contact" className='!underline underline-offset-2'>here</Link> and let's make it happen.
            </h2>
        </>
    );
};

export default AboutPage;
