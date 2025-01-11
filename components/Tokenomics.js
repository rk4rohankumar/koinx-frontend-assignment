'use client';

import React, { memo } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Tokenomics = () => {
  const data = [
    { name: 'Crowdsale Investors', value: 80 },
    { name: 'Foundation', value: 20 },
  ];

  const COLORS = ['#0088FE', '#FFBB28'];

  return (
    <div className='bg-white rounded-lg'>
      <div className='m-5 py-5 text-3xl font-semibold'>
        <h1>Tokenomics</h1>
      </div>
      <div className='m-5 ml-8 font-semibold'>
        <h1>Initial Distribution</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between px-8'>
        {/* Pie Chart Section */}
        <div className='w-full md:w-[50%] flex justify-center'>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={50}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Details Section */}
        <div className='mt-4 md:mt-0 md:w-[40%] flex flex-col justify-center'>
          <ul>
            {data.map((entry, index) => (
              <li key={index} className="flex justify-between py-1 text-lg">
                <span>{entry.name}</span>
                <span>{entry.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='m-5 pb-5'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo
          repellendus magni odit repellat reprehenderit facilis blanditiis architecto id
          itaque, perspiciatis sapiente animi adipisci iusto sed deserunt vel modi natus
          obcaecati corporis, assumenda inventore molestias ducimus vero. Ea exercitationem
          nemo perferendis eveniet recusandae velit officia earum architecto doloribus
          praesentium? Quasi assumenda aspernatur accusamus inventore perferendis,
          perspiciatis consectetur atque sit doloribus fuga magni placeat pariatur, natus
          deserunt minus!
        </p>
      </div>
    </div>
  );
};

export default memo(Tokenomics);
