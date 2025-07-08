import { useState } from "react";
import { ResultForm } from "../../Components/Result/ResultForm";
import { ResultCard } from "../../Components/Result/ResultCard";
import { SuggestedDMC } from "../../Components/Result/SuggestedDMC";

export const Result = () => {
  const [status, setStatus] = useState("passed");

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-gray-50 p-6 rounded-md flex flex-col lg:flex-row gap-8 items-start justify-between">
        <div className="w-full lg:w-2/3">
          <h2 className="text-center text-sm text-[#293080] font-semibold mb-2">
            STUDENT RESULT PORTAL
          </h2>
          <h1 className="text-2xl font-bold text-[#293080] text-center mb-6">
            View Your Result Online
          </h1>
          <ResultForm />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <ResultCard status={status} />
        </div>
      </div>
      <div className="mt-10">
        <SuggestedDMC />
      </div>
    </section>
  );
};
