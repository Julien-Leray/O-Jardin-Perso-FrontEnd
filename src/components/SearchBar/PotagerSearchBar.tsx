import React, { useState } from 'react';
import { Search } from 'react-feather';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAllProducts } from '../../store/thunks/productThunks';
import { Product } from '../../types/types';

interface PotagerSearchBarProps {
  products: Product[];
  addToGarden: (product: Product) => void;
}

function PotagerSearchBar({ products, addToGarden }: PotagerSearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();
  const filteredProducts = products.filter((product) => {
    const productNameToLower = product.name.toLowerCase();
    const searchStringLower = inputValue.toLowerCase();
    return productNameToLower.includes(searchStringLower);
  });

  return (
    <div className="w-full bg-green-700 py-8">
      <form
        className="flex w-full md:w-2/3 items-center mx-auto pl-8"
        onSubmit={(event) => {
          event.preventDefault();
          setInputValue(inputValue);
          setInputValue('');
        }}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="text"
            className="bg-white text-gray-900 text-sm rounded-full focus:ring-[#F6D50E] block w-full ps-10 py-4"
            placeholder="Rechercher un fruit ou un légume..."
            required
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              dispatch(fetchAllProducts());
            }}
          />
        </div>
        <button
          type="submit"
          className="py-4 px-6 -translate-x-10 text-sm font-medium text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
        >
          Rechercher
        </button>
      </form>
      <div className="w-full md:w-2/3 mx-auto pl-14 pr-36 rounded-lg">
        <ul className="mt-1 bg-white z-10 divide-y divide-[#F6D50E]">
          {inputValue &&
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="hover:bg-[#F5780A] text-black hover:text-white py-2 px-4 flex justify-between items-center w-full"
              >
                <span>{product.name}</span>
                <button
                  type="button"
                  className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
                  onClick={() => addToGarden(product)}
                >
                  Ajouter
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PotagerSearchBar;
