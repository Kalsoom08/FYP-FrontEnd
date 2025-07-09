import React from 'react'
import { SlipForm } from '../../Components/RenewableSlip/SlipForm'
import { SlipCard } from '../../Components/RenewableSlip/SlipCard'

export const FeeSlip = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-5xl border border-[#293080] rounded-md p-6 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
        <div className="w-full sm:w-1/2">
          <SlipForm />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <SlipCard />
        </div>
      </div>
    </div>
  );
};

