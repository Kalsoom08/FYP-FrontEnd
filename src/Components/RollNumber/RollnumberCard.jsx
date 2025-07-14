export const RollnumberCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-6">
      <div className="grid grid-cols-3 bg-gray-200 rounded-t-md text-center text-[#293080] font-semibold text-sm">
        <div className="py-2 border-r border-white">Class No</div>
        <div className="py-2 border-r border-white">Name</div>
        <div className="py-2">Section</div>
      </div>
      <div className="bg-gray-100 h-10 rounded-none mt-1" />
      <div className="bg-gray-100 h-10 rounded-b-md mt-1" />
    </div>
  );
};
