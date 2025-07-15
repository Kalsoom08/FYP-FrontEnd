const departments = ['BBA', 'CS', 'IT', 'AI'];

export const DepartmentMenu = ({ selected, onSelect }) => {
  return (
    <>
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onSelect(dept)}
          className={`px-4 py-2 text-sm sm:text-base border rounded-full transition-all ${
            selected === dept
              ? 'bg-indigo-900 text-white'
              : 'bg-white text-indigo-900 border-indigo-900'
          }`}
        >
          {dept}
        </button>
      ))}
    </>
  );
};

