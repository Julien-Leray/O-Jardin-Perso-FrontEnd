import React from 'react';
import { Search } from 'react-feather';

function SearchBar() {
  return (
    <div className="w-full bg-[#F6D50E]">
      <form className="flex w-full md:w-2/3 items-center py-8 mx-auto pl-8">
        {/* <label htmlFor="simple-search" className="sr-only">
          Search
        </label> */}
        <div className="relative w-full  ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-white text-gray-900 text-sm rounded-full focus:ring-[#F6D50E] block w-full ps-10 py-4"
            placeholder="Rechercher un fruit ou un légume..."
            required
          />
        </div>
        <button
          type="submit"
          className="py-4 px-6 -translate-x-10 text-sm font-medium text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
        >
          Rechercher
          {/* <span className="sr-only">Rechercher</span> */}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
