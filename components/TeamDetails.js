import React,{memo} from 'react';
import {teamData} from '@/staticData'

const Team = ({ }) => {
  return (
    <div className='bg-white rounded-lg mb-10 pb-4'>
      <div className='m-5 py-5 '>
        <h1 className='text-3xl font-bold'>Team</h1>
        <p className='mt-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus voluptatem aut molestias doloremque
          ipsam harum facere doloribus error et nihil ut ea cum, enim animi iure eaque dignissimos magni illum
          quisquam blanditiis dolore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit eligendi maxime autem quam, nulla, quibusdam tempora molestias totam aspernatur dolore distinctio mollitia ut est sapiente quo eos, minus exercitationem sunt cum ducimus beatae placeat! Ex optio voluptatibus distinctio.
        </p>
      </div>
      <div className='flex flex-col '>
        {teamData.map(({ imageSrc, personName, designation, text }, index) => (
          <TeamCard
            key={index}
            imageSrc={imageSrc}
            personName={personName}
            designation={designation}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};



const TeamCard = ({ imageSrc, personName, designation, text }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-blue-100 m-5 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={imageSrc} alt="Profile" className="w-20 h-20 rounded-xl mb-2" />
        <h2 className="text-lg font-bold text-center">{personName}</h2>
        <h2 className="text-center">{designation}</h2>
      </div>
      <div className="flex-1">
        <p>{text}</p>
      </div>
    </div>

  );
};


export default memo(Team);