import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Datesheet } from '../../Pages/Public/Datesheet';
import { HallStatement } from '../../Pages/Public/HallStatement';
import { Timetable } from '../../Pages/Public/Timetable';
import { Top10Students } from '../../Pages/Public/Top10Students';

export const Examinations = () => {
  return (
    <div>
      <Routes>
        <Route path="datesheet" element={<Datesheet />} />
        <Route path="hall-statement" element={<HallStatement />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="top-10-students" element={<Top10Students />} />
      </Routes>
    </div>
  );
};
