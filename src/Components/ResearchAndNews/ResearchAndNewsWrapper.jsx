import React from 'react';
import { Research } from './Research';
import { News } from './News';


export const ResearchAndNewsWrapper = () => {
  return (
         <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div className="lg:w-[68%]">
                <Research />
            </div>
            <News />
        </div>
  )
}

