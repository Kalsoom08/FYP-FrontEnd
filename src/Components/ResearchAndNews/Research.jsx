import React from 'react';
import Image1 from '../../assets/Research/1.png';
import Image2 from '../../assets/Research/2.png';
import Image3 from '../../assets/Research/3.png';
import Image4 from '../../assets/Research/4.png';

export const Research = () => {
    const ResearchProjects = [
        {
            img: Image1,
            title: 'All my residuary estate including the corpus that may fall after the lapse of life interest'
        },
        {
            img: Image2,
            title: 'All my residuary estate including the corpus that may fall after the lapse of life interest'
        },
        {
            img: Image3,
            title: 'All my residuary estate including the corpus that may fall after the lapse of life interest'
        },
        {
            img: Image4,
            title: 'All my residuary estate including the corpus that may fall after the lapse of life interest'
        }
    ];

    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold mb-4'>Research & Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {ResearchProjects.map((data, index) => (
                    <div key={index} className='border border-[#ccc] rounded-lg overflow-hidden shadow-sm bg-white'>
                        <div className='relative'>
                            <img src={data.img} alt="" className='w-full h-40 object-cover' />
                            <div className='absolute top-0 left-0 bg-[#2C2C84] text-white px-3 py-1'>
                                <p className='text-xs leading-tight'>June</p>
                                <p className='text-sm font-bold leading-tight'>17</p>
                            </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-base font-medium'>{data.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
