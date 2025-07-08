import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllSoftwares, getSoftwareByName } from '../../APIs/Public/SoftwareApi';

const AllSoftwares = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const { data: allData, isLoading: isLoadingAll } = useQuery({
    queryKey: ['allSoftwares'],
    queryFn: getAllSoftwares,
  });

  const {
    data: searchData,
    refetch,
  } = useQuery({
    queryKey: ['softwareByName', activeSearch],
    queryFn: () => getSoftwareByName(activeSearch),
    enabled: false,
  });

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setActiveSearch(searchTerm.trim());
      refetch();
    } else {
      setActiveSearch('');
    }
  };

  // Automatically show all software if input is cleared
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setActiveSearch('');
    }
  }, [searchTerm]);

  const displaySoftwares =
    activeSearch && searchData?.data?.length > 0
      ? searchData.data
      : allData?.data || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-[2rem] font-bold text-[#293080] mb-[2rem] m-auto w-fit">
        Softwares
      </h2>

      {/* Search Box */}
      <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
        <div className="flex border border-gray-300 rounded-md overflow-hidden w-64">
          <input
            type="text"
            placeholder="Software"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            className="w-full px-3 py-2 outline-none"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#293080] text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Search
        </button>
      </div>

      {/* Display Software Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {displaySoftwares.map((software) => (
          <div
            key={software._id}
            className="rounded-lg w-[15rem] py-4 px-3 shadow-2xl text-center bg-white"
          >
            <img
              src={software.logo || '/no-logo.png'}
              alt={software.name}
              className="mx-auto h-16 object-contain mb-4"
            />
            <h3 className="font-semibold mb-2 text-lg">{software.name}</h3>
            <button className="bg-[#293080] text-white py-1 px-2 w-[10rem] rounded-sm text-sm mb-2">
              {software.platforms?.join(', ')}
            </button>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Version:</strong> {software.version}
            </p>

            <a
              href={software.downloadFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#293080] hover:underline text-sm"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSoftwares;
