import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import fetchAllProducts from '../../store/thunks/productThunks';

function SearchBar() {
  const refSubmitSearchbar = useRef<null | HTMLFormElement>(null);
  const refInputSearchbar = useRef<null | HTMLInputElement>(null);
  const refListeSearchbar = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllProducts());
  // }, []);

  const [inputValue, setInputValue] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const products = useAppSelector((state) => state.products.allProducts);

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

  const filteredProducts = products.filter((product) => {
    const productNameToLower = product.name.toLowerCase();
    const searchStringLower = inputValue.toLowerCase();
    return productNameToLower.includes(searchStringLower);
  });
  const matchingProduct = filteredProducts.find((product) => {
    return product.name.toLowerCase() === inputValue;
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
          navigate(
            matchingProduct
              ? `/${
                  filteredProducts[0].category_id === 1 ? 'fruits' : 'legumes'
                }/${filteredProducts[0].id}`
              : '/'
          );
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
            onFocus={() => {
              setIsFilterVisible(true);
            }}
            onChange={(event) => {
              setInputValue(event.target.value);
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
