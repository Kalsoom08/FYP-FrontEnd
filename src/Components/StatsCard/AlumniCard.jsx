import React from 'react';
import CountUp from 'react-countup';

export const AlumniCard = () => {
  const stats = [
    { number: 33, label: 'PHD Faculty Members' },
    { number: 4509, label: 'Alumni' },
    { number: 50, label: 'Project Consultancies' },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-8 p-8 bg-white">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#262C7C] text-white w-60 h-36 flex flex-col justify-center items-center rounded-xl shadow-[#262c7cb6] shadow-md "
        >
          <span className="text-4xl font-bold text-yellow-400">
            <CountUp end={item.number} duration={1.5} />
          </span>
          <p className="mt-2 text-sm text-white text-center">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
