import { useState } from 'react';
import { DepartmentMenu } from '../../Components/Calender/DepartmentMenu';
import { CalendarCard } from '../../Components/Calender/CalendarCard';

const calendarMockData = {
  BBA: [
    { label: 'Session Start', date: 'Aug 25, 2025' },
    { label: 'Midterm Exam', date: 'Aug 25, 2025' },
    { label: 'Last Class', date: 'Aug 25, 2025' },
    { label: 'Final Exams', date: 'Aug 25, 2025' },
  ],
  CS: [
    { label: 'Session Start', date: 'Sep 01, 2025' },
    { label: 'Midterm Exam', date: 'Oct 10, 2025' },
    { label: 'Last Class', date: 'Dec 15, 2025' },
    { label: 'Final Exams', date: 'Dec 25, 2025' },
  ],
  IT: [
    { label: 'Session Start', date: 'Sep 05, 2025' },
    { label: 'Midterm Exam', date: 'Oct 15, 2025' },
    { label: 'Last Class', date: 'Dec 20, 2025' },
    { label: 'Final Exams', date: 'Jan 05, 2026' },
  ],
  AI: [
    { label: 'Session Start', date: 'Sep 10, 2025' },
    { label: 'Midterm Exam', date: 'Oct 20, 2025' },
    { label: 'Last Class', date: 'Jan 10, 2026' },
    { label: 'Final Exams', date: 'Jan 20, 2026' },
  ],
};

export  const Calendar = () => {
  const [selectedDept, setSelectedDept] = useState('BBA');

  return (
    <section className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-900 mb-6">
        Academic Calendar
      </h1>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <DepartmentMenu selected={selectedDept} onSelect={setSelectedDept} />
      </div>
      <CalendarCard calendarData={calendarMockData[selectedDept]} />
    </section>
  );
};

