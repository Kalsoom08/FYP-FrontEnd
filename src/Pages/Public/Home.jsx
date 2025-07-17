import React from 'react';
import {AlumniCard} from '../../Components/StatsCard/AlumniCard';

export const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <AlumniCard/>
    </div>
  );
};
