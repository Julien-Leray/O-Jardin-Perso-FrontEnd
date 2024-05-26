import React, { useEffect, useRef, useState, FocusEvent } from 'react';
import { Search } from 'react-feather';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { fetchAllProducts } from '../../store/thunks/productThunks';
import { Product } from '../../types/types';

interface SearchBarProps {
  products: Product[];
}

function SearchBar({ products }: SearchBarProps) {
  const refSubmitSearchbar = useRef<null | HTMLFormElement>(null);
  const refInputSearchbar = useRef<null | HTMLInputElement>(null);
  const refListeSearchbar = useRef<null | HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleBlur = () => {
    setTimeout(() => {
      if (
        refInputSearchbar.current &&
        refListeSearchbar.current &&
        refSubmitSearchbar.current &&
        !refInputSearchbar.current.contains(document.activeElement) &&
        !refListeSearchbar.current.contains(document.activeElement) &&
        !refSubmitSearchbar.current.contains(document.activeElement)
      ) {
        setIsFilterVisible(false);
      }
    }, 0);
  };

  const handleFocus = () => {
    setIsFilterVisible(true);
  };

  const filteredProducts = products.filter((product) => {
    const productNameToLower = product.name.toLowerCase();
    const searchStringLower = inputValue.toLowerCase();
    return productNameToLower.includes(searchStringLower);
  });

  return (
    <div className="w-full bg-[#F6D50E] py-8">
      <form
        ref={refSubmitSearchbar}
        className="flex w-full md:w-2/3 items-center mx-auto pl-8"
        onSubmit={(event) => {
          event.preventDefault();
          setInputValue(inputValue);
          setInputValue('');
        }}
      >
        <div className="relative w-full  ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            ref={refInputSearchbar}
            type="text"
            className="bg-white text-gray-900 text-sm rounded-full focus:ring-[#F6D50E] block w-full ps-10 py-4"
            placeholder="Rechercher un fruit ou un légume..."
            value={inputValue}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(event) => {
              setInputValue(event.target.value);
              dispatch(fetchAllProducts());
            }}
          />
        </div>
      </form>
      <div
        className="w-full md:w-2/3 mx-auto pl-14 pr-36 rounded-lg"
        ref={refListeSearchbar}
      >
        {isFilterVisible && (
          <ul className="mt-1 bg-white z-10 divide-y divide-[#F6D50E]">
            {inputValue &&
              filteredProducts.map((product) => (
                <Link
                  to={`/${product.category_id === 1 ? 'fruits' : 'legumes'}/${
                    product.id
                  }`}
                  key={product.id}
                >
                  <li
                    className="hover:bg-[#F5780A] text-black hover:text-white py-2 px-4 flex w-full "
                    key={product.id}
                  >
                    {product.name}
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
