import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchFruits } from '../../../../store/thunks/productThunks';

interface FruitsProps {
  logged: boolean;
  isFavActive: boolean;
  setIsFavActive: React.Dispatch<React.SetStateAction<boolean>>;
  favProducts: Product[]
}

function Fruits({ logged, isFavActive, setIsFavActive }: FruitsProps) {
  const dispatch = useAppDispatch();
  const { fruits, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Fruits</h2>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div>
        <ul className="flex flex-wrap md:flex-row -m-4 justify-stretch">
          {fruits.map((fruit) => (
            <li key={fruit.id} className="w-5/6 md:w-1/3 p-4">
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Link to={`/fruits/${fruit.id}`}>
                  <img
                    className="w-full h-48 object-cover mx-auto"
                    src={`http://localhost:4000/${fruit.picture}`}
                    alt={fruit.name}
                  />
                </Link>
                {logged && (
                  <button type="button" className="place-self-end mr-4 mt-4">
                    <Heart
                      size="35"
                      className={`rounded-full p-2 ${
                        isFavActive && 'bg-[#16A1AF] text-white'
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsFavActive(!isFavActive);
                        if (!isFavActive) {
                          // dispatch(actionAddProductToFav());
                          console.log('fav ajouté');
                        } else {
                          console.log('fav supprimé');
                          // dispatch(actionDeleteFav());
                        }
                      }}
                    />
                  </button>
                )}

                <div className="flex flex-col p-6 ">
                  <h3 className="font-bold text-center mb-2">{fruit.name}</h3>
                  <span className="italic text-center text-xs mb-2">
                    {fruit.latin_name}
                  </span>
                  <p className="italic text-sm my-4">
                    {fruit.description.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/fruits/${fruit.id}`}
                    className="mx-auto py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
                  >
                    <button type="button">En savoir plus</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fruits;
