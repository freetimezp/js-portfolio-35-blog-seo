import React from 'react';
import { allBlogs } from '../../../../.contentlayer/generated/index.mjs';
import GithubSlugger, { slug } from 'github-slugger';
import Categories from '../../../components/Blog/Categories';
import BlogLayoutThree from '../../../components/Blog/BlogLayoutThree';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{ slug: "all" }];

    allBlogs.map(blog => {
        if (blog.isPublished) {
            blog.tags.map(tag => {
                let slugified = slugger.slug(tag);
                if (!categories.includes(slugified)) {
                    categories.push(slugified);
                    paths.push({ slug: slugified });
                }
            });
        }
    });

    return paths;
}

export async function generateMetadata({ params }) {
    return {
        title: `${params.slug.replaceAll('-', " ")} blogs`,
        description: `Learn more about ${params.slug === 'all' ? 'web development' : params.slug} through our collections and tutorials`,
    }
}

const CategoryPage = ({ params }) => {
    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some(tag => {
            const slugified = slug(tag);

            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified);
            }

            if (params.slug === "all") {
                return true;
            }

            return slugified === params.slug;
        });
    });

    return (
        <article className='mt-12 flex flex-col text-dark dark:text-light'>
            <div className='px-8 sm:px-16 md:px-24 lg:px-32 flex flex-col'>
                <h1 className='mt-6 font-semibold text-2xl sm:text-3xl 
                    md:text-4xl lg:text-5xl'>
                    #{params.slug}
                </h1>
                <span className='mt-2 inline-block'>
                    Discover more categories and expand your knowledge!
                </span>
            </div>

            <Categories categories={allCategories} currentSlug={params.slug} />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 
                gap-16 mt-12 md:mt-24 px-5 sm:px-12 md:px-18 lg:px-24 sxl:px-32'>
                {blogs.map((blog, index) => (
                    <article key={index} className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </article>
    );
};

export default CategoryPage;
