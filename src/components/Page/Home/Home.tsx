import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchTutorials } from '../../../store/reducers/tutoriels';
import products from '../../../store/reducers/products';
import { fetchFruits, fetchLegumes } from '../../../store/thunks/productThunks';

interface Tutorials {
  id: number;
  picture: string;
  name: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
}

const getRandomTutos = (tuto: Tutorials[]): Tutorials[] => {
  if (tuto.length <= 2) return tuto;
  const twoTutoOnHome = [...tuto].sort(() => 0.5 - Math.random());
  return twoTutoOnHome.slice(0, 3);
};

const getRandomFruits = (fruits: Product[]): Product[] => {
  if (fruits.length <= 2) return fruits;
  const fruitsOnHome = [...fruits].sort(() => 0.5 - Math.random());
  return fruitsOnHome.slice(0, 4);
};

const getRandomLegumes = (legumes: Product[]): Product[] => {
  if (legumes.length <= 2) return legumes;
  const legumeOnHome = [...legumes].sort(() => 0.5 - Math.random());
  return legumeOnHome.slice(0, 4);
};

function Home() {
  const dispatch = useAppDispatch();

  const { tuto } = useAppSelector((state) => state.tutoriels);
  const randomTutos = getRandomTutos(tuto);

  const { legumes } = useAppSelector((state) => state.products);
  const randomLegumes = getRandomLegumes(legumes);

  const { fruits } = useAppSelector((state) => state.products);
  const randomFruits = getRandomFruits(fruits);

  useEffect(() => {
    dispatch(fetchTutorials());
    dispatch(fetchLegumes());
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <>
      <div className="bg-white text-center py-2 text-sm italic">
        <p>Bienvenue sur notre site web dédié au jardinage!</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <div className="w-full py-4">
          <h2 className="text-xl text-center font-bold	p-2">Fruits </h2>
          <div className="flex flex-col bg-gray-200 rounded-lg p-4">
            <ul className="flex flex-wrap justify-around  ">
              {randomFruits.map((product) => (
                <li className="my-0.5 p-1 w-5/12 " key={product.id}>
                  <img
                    // src={product.picture}
                    alt={`Photo de ${product.name}`}
                    className="my-0.5 p-1 w-5/12"
                  />
                  <h3>{product.name}</h3>
                </li>
              ))}
            </ul>
            <Link
              to="/fruits"
              className="mx-auto mt-6 py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
            >
              <button type="button">Voir plus de fruits</button>
            </Link>
          </div>
        </div>
        <div className="w-full py-4">
          <h2 className="text-xl text-center font-bold p-2">Légumes </h2>
          <div className="flex flex-col bg-gray-200 rounded-lg p-4">
            <ul className="flex flex-wrap justify-around  ">
              {randomLegumes.map((product) => (
                <li className="my-0.5 p-1 w-5/12 " key={product.id}>
                  <img
                    // src={product.picture}
                    alt={`Photo de ${product.name}`}
                    className="my-0.5 p-1 w-5/12"
                  />
                  <h3>{product.name}</h3>
                </li>
              ))}
            </ul>
            <Link
              to="/legumes"
              className="mx-auto mt-6 py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
            >
              <button type="button">Voir plus de légumes</button>{' '}
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col rounded  py-6">
        <h2 className="text-xl text-center font-bold p-4">Tutos jardinage</h2>
        <ul className="m-15 flex flex-col md:flex-row items-center gap-2 md:gap-6">
          {randomTutos.map((tutoriels) => (
            <li
              className="flex flex-col bg-gray-200 p-4 w-full rounded-lg"
              key={tutoriels.id}
            >
              <img
                className="p-1"
                src={tutoriels.picture}
                alt={`Tuto de ${tutoriels.title}`}
              />
              <h3 className="font-bold">{tutoriels.title}</h3>
              <p className="p-1">{tutoriels.article}</p>
              <Link
                to="/tutos"
                className="mx-auto py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
              >
                <button type="button">Lire la suite</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
