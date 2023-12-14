import React from 'react';
import Category from './Category';
import { slug } from 'github-slugger';

const Categories = ({ categories, currentSlug }) => {
    return (
        <div className='px-0 sm:px-10 sxl:px-20 mt-10 border-t-2 text-dark 
            border-b-2 dark:text-light
            border-solid border-dark dark:border-light
            py-4 flex items-start justify-center flex-wrap font-medium mx-5 
            sm:mx-10'>
            {categories.map((cat) => (
                <Category
                    key={cat}
                    link={`/categories/${cat}`}
                    name={cat}
                    active={currentSlug === slug(cat)}
                />
            ))}
        </div>
    );
};

export default Categories;
