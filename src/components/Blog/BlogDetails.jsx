import React from 'react';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { slug } from 'github-slugger';
import ViewCounter from './ViewCounter';

const BlogDetails = ({ blog, slug: blogSlug }) => {
    return (
        <div className='px-5 md:px-10 bg-accent dark:bg-accentDark/30 text-light py-2 flex items-center justify-around 
            flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg'>
            <time className='m-3'>
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
            </time>

            <div className='m-3'>
                <ViewCounter slug={blogSlug} />
            </div>

            <div className='m-3'>
                {blog.readingTime.text}
            </div>

            <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
                #{blog.tags[0]}
            </Link>
        </div>
    );
};

export default BlogDetails;
