import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, XCircle } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Product } from '../../../@types/types';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../../../store/thunks/favoritesThunks';

interface FavoritesProps {
  productCat: Product;
  logged: boolean;
}

function Favorites({ logged, productCat }: FavoritesProps) {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.products);

  return (
    <>
      {logged && (
        <div className="flex flex-row justify-end">
          {!{ productCat }.isFav && (
            <button
              type="button"
              className="  mr-4 mt-4"
              onClick={(event) => {
                event.preventDefault();
                dispatch(actionAddProductToFav(productCat.id));
              }}
            >
              <Heart
                size="35"
                className={`rounded-full p-2 ${
                  productCat.isFav && 'bg-[#16A1AF] text-white'
                }`}
              />
            </button>
          )}
          <button
            type="button"
            className=" mr-4 mt-4"
            onClick={(event) => {
              event.preventDefault();
              dispatch(actionDeleteFav({ id: productCat.id }));
            }}
          >
            <XCircle
              size="35"
              className={`rounded-full p-2 ${
                productCat.isFav && 'bg-[#16A1AF] text-white'
              }`}
            />
          </button>
        </div>
      )}
      ;
    </>
  );
}

export default Favorites;
