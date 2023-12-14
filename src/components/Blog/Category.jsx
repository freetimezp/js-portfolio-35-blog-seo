import React from 'react';
import Link from 'next/link';
import { cx } from '../../utils';

const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link href={link} className={
            cx("inline-block py-1 md:py-2 px-5 md:px-10 rounded-full border-2 border-solid border-dark hover:scale-110 transition-all duration-400 ease m-2", props.className,
                active ? "bg-dark text-light dark:border-light" : "bg-light text-dark dark:border-dark")
        }>
            #{name}
        </Link>
    );
};

export default Category;
