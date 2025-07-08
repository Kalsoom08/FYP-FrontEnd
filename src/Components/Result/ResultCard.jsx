import { BsCheckCircle } from "react-icons/bs";
import { MdClose, MdOutlineInfo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export const ResultCard = () => {
//   if (status === "passed") {
    return (
      <div className="border-2 border-[#293080] rounded-md p-4 w-[300px] text-center cursor-pointer">
        <div className="flex justify-center mb-2 text-[#293080]">
          <BsCheckCircle size={24} />
        </div>
        <h2 className="font-bold">Passed</h2>
        <p className="mt-2 font-semibold">Tom Smith</p>
        <p className="text-sm">81</p>
        <p className="text-sm">GPA: <b>3.51</b> | CGPA: <b>3.40</b></p>
        <button className="mt-4 px-4 py-2 bg-[#293080] text-white rounded-md text-sm hover:bg-[#1f265c] transition cursor-pointer">
          <IoDocumentTextOutline className="inline mr-1" /> View DMC
        </button>
      </div>
    );
  }

//   if (status === "failed") {
//     return (
//       <div className="border-2 border-red-600 rounded-md p-4 w-[300px] text-center cursor-pointer">
//         <div className="flex justify-center mb-2 text-red-600">
//           <MdClose size={24} />
//         </div>
//         <h2 className="font-bold text-red-600">Failed</h2>
//         <p className="mt-2 font-semibold">Tom Smith</p>
//         <p className="text-sm">81</p>
//         <p className="text-sm">GPA: <b>1.50</b> | CGPA: <b>2.55</b></p>
//         <div className="bg-red-100 text-red-600 text-xs mt-2 p-2 rounded-md">
//           Failed Papers:<br />ICC-20, MCC-90
//         </div>
//       </div>
//     );
//   }

//   if (status === "absent") {
//     return (
//       <div className="border-2 border-blue-500 rounded-md p-4 w-[300px] text-center cursor-pointer">
//         <div className="flex justify-center mb-2 text-blue-500 py-8 ">
//           <MdOutlineInfo size={24} />
//         </div>
//         <h2 className="font-bold text-blue-500">Absent</h2>
//         <p className="mt-2 font-semibold">Tom Smith</p>
//         <p className="text-sm">81</p>
//         <p className="text-sm mt-2 text-gray-500">Not Appeared in Examination</p>
//       </div>
//     );
//   }

//   return null;
// };
