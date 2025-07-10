import React, { useState } from "react";
import { StatusForm } from "../../Components/RegsitratioonStatus/StatusFom";
import { StatusOutput } from "../../Components/RegsitratioonStatus/StatusOutput";

export const Registration = () => {
  const [searchResult, setSearchResult] = useState(null);

  const mockDatabase = ["2021-CS-001", "2020-CS-015", "2019-CS-123"];

  const handleSearch = (registration) => {
    const isRegistered = mockDatabase.includes(registration);
    setSearchResult(isRegistered);
  };

  return (
    <div className="max-w-xl mx-auto rounded-md gap-4 p-10 border border-[#293080]">
      <StatusForm onSearch={handleSearch} />
      <StatusOutput status={searchResult} />
    </div>
  );
};
