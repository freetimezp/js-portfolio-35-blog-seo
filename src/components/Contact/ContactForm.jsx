"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-base xs:text-lg 
            sm:text-xl font-medium leading-relaxed font-in'>
            Hello! My name is{" "}
            <input type="text" placeholder="Your name" {...register("name", { required: true })}
                className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center 
                placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            and I want to discuss a potential project. You can email me at{" "}
            <input type="email" placeholder="Your @email" {...register} className='outline-none 
                border-0 p-0 mx-2 focus:ring-0 placeholder:text-center 
                placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            or reach out to me on{" "}
            <input type="tel" placeholder="Your phone number" {...register("phone number", {})}
                className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center 
                placeholder:text-lg border-b border-gray focus:border-gray bg-transparent'/>
            Here are some details about my project: <br />
            <textarea {...register("project details", {})} rows={3}
                placeholder="My project is about..."
                className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg 
                border-b border-gray focus:border-gray bg-transparent w-full' />

            <input type="submit" placeholder='Send' className='mt-8 font-medium inline-block 
                uppercase text-sm sm:text-xl py-3 px-8 border-2 border-solid border-dark 
                dark:border-light rounded cursor-pointer' value="Send Message" />
        </form >
    );
}