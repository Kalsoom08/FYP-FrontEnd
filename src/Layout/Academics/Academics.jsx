import { Route, Routes } from "react-router-dom";
import Notes from '../../Pages/Public/Notes';
import Softwares from '../../Pages/Public/Softwares';
import {Subjects} from '../../Pages/Public/Subjects';
import {Timetable} from '../../Pages/Public/Timetable';

export const Academics = () => {
  return (
    <div>
      <Routes>
        <Route path="notes" element={<Notes />} />
        <Route path="softwares" element={<Softwares />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="timetable" element={<Timetable />} />
      </Routes>
    </div>
  );
};
