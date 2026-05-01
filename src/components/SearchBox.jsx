import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState('');

  return (
    <div className="relative w-full max-w-[600px]">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(value.trim())}
        placeholder="Search for a movie... e.g. Inception"
        className="
          w-full h-14 bg-cardbg text-white font-dm text-base
          pl-5 pr-16 rounded-lg
          border border-[#333]
          placeholder-gray-600
          outline-none
          focus:border-lafred focus:ring-2 focus:ring-lafred/20
          transition-all duration-200
        "
      />
      <button
        onClick={() => onSearch(value.trim())}
        className="
          absolute right-0 top-0 h-14 w-14
          bg-lafred hover:bg-red-700
          rounded-r-lg
          flex items-center justify-center
          transition-colors duration-200
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
