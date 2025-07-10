export const StatusOutput = ({ status }) => {
  if (status === null) return null;

  return (
    <div
      className={`mt-6 flex flex-col items-center gap-4 p-4 text-lg rounded-md font-medium ${
        status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
    
      <span>{status ? " Student is registered." : " Student is not registered."}</span>
    </div>
  )
};
