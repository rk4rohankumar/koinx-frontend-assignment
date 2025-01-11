import React, { memo } from 'react';
import ProgressBar from './Progressbar'

const Performance = ({highest,lowest,current}) => {

    return (
        <div className='bg-white w-full py-6 rounded'  >
            <h1 className="mb-6 text-4xl ml-6">Performance</h1>

            <div className="flex items-center ml-6 gap-4">
                <span className="w-40 text-center break-words">Todays&apos;s  Low: {lowest}</span>
                <ProgressBar className="w-40" highest={highest} lowest={lowest} current={current} />
                <span className="w-40 text-center break-words">Today&apos;s High: {highest}</span>
            </div>

            <div className="flex items-center mt-20 ml-6 gap-4">
                <span className="w-40 text-center break-words">52W Low: {lowest}</span>
                <ProgressBar className="w-40" highest={highest} lowest={lowest}  />
                <span className="w-40 text-center break-words">52W High: {highest}</span>
            </div>
        </div>
    );
};

export default memo(Performance);
