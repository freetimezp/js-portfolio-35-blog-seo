import React from 'react';
import Link from 'next/link';
import { cx } from '../../utils';

const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link href={link} className={
            cx("inline-block py-2 px-10 rounded-full border-2 border-solid border-dark hover:scale-110 transition-all duration-400 ease m-2", props.className,
                active ? "bg-dark text-light" : "bg-light text-dark")
        }>
            #{name}
        </Link>
    );
};

export default Category;
