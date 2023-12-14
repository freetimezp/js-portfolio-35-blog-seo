import React from 'react';

import LottieAnimation from '../../../components/Contact/LottieAnimation';
import ContactForm from '../../../components/Contact/ContactForm';

import siteMetadata from '../../../utils/siteMetadata';

export const metadata = {
    title: "Contact Me",
    description: `Contact me with the form available on this page or use email ${siteMetadata.email}`,
}

const ContactPage = () => {
    return (
        <section className='w-full h-auto md:h-[75vh] border-b-2 border-solid 
            border-dark dark:border-light flex flex-col md:flex-row
            items-center justify-center text-dark dark:text-light'>
            <div className='w-2/5 inline-block h-full border-r-0 md:border-r-2 
                border-solid border-dark dark:border-light'>
                <LottieAnimation />
            </div>
            <div className='w-full md:w-3/5 flex flex-col items-center md:items-start 
                justify-center px-5 sm:px-10 md:px-16 pb-8'>
                <h2 className='font-bold capitalize text-4xl'>
                    Let's Connect!
                </h2>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactPage;
