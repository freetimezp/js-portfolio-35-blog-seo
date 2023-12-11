import React from 'react';

const InsightRoll = ({ insights }) => {
    return (
        <div className='w-full bg-accent text-light whitespace-nowrap overflow-hidden'>
            <div className='w-full py-3 flex items-center justify-center capitalize 
                font-semibold tracking-wider text-base animate-roll'>
                {insights.map((text) => (
                    <div key={text}>
                        {text} <span className='px-4'>|</span>{" "}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightRoll;