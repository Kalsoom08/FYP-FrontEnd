import React from 'react';

export const News = () => {
    const newsList = [
        "UFM Cases dealing Committee meeting for BBA (H), BS(CS/IT/AI) and DVM Students have",
        "UFM Cases dealing Committee meeting for BBA (H), BS(CS/IT/AI) and DVM Students",
        "UFM Cases dealing Committee meeting for BBA (H), BS(CS/IT/AI) and DVM Students",
        "UFM Cases dealing Committee meeting for BBA (H), BS(CS/IT/AI) and DVM Students have",
        "UFM Cases dealing Committee meeting for BBA (H), BS(CS/IT/AI) and DVM Students"
    ];

    return (
        <div className="w-full lg:w-[30%]">
            <h1 className="text-xl font-bold border-b pb-1 mb-4">News And Events</h1>
            <div className="flex flex-col gap-4">
                {newsList.map((news, index) => (
                    <p key={index} className="text-sm text-blue-900 font-medium">{news}</p>
                ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-[#2C2C84] text-white rounded-lg font-semibold text-sm">
                View All
            </button>
        </div>
    );
};
