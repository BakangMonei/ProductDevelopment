import React from "react";

const SearchBar = () => {
    return (
        <div class="flex items-center justify-center w-full">
            <div class="relative">
                <input type="text" class="h-10 px-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-full focus:outline-none" placeholder="Search..." />
                <button class="absolute top-0 right-0 mt-3 mr-4">
                    <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.071 14.657a7.5 7.5 0 111.414-1.414l3.713 3.713a1 1 0 01-1.414 1.414l-3.713-3.713zm-4.571-1.414a5 5 0 111.414-1.414 5 5 0 01-1.414 1.414z"></path>
                    </svg>
                </button>
            </div>
        </div>

    );
};


export default SearchBar;