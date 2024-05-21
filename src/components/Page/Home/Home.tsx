import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../data/data';
import tutoData from '../../../data/tuto';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import product from '../../../store/reducers/products';

function Home() {
  const fruits = data.filter((product) => product.category_id === 1);
  const vegetables = data.filter((product) => product.category_id === 2);

  return (
    <div className="bg-white text-center">
      <div className="bg-white text-black py-2 text-sm italic">
        <p>Bienvenue sur notre site web dédié au jardinage!</p>
      </div>

      <div className="md:flex md:justify-around">
        <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded">
          <h2 className="text-base text-black">Fruits </h2>
          <ul className="text-xs flex flex-wrap justify-around rounded bg-white mx-2 w-330 py-2 m-1.5">
            {fruits.map((product) => (
              <li
                className="my-0.5 p-1 border-black border-2 w-5/12  bg-white text-black"
                key={product.id}
              >
                <img src={product.picture} alt={`Photo de ${product.name}`} />
                <h3>{product.name}</h3>
              </li>
            ))}
          </ul>

          <p className="bg-[#F5780A] text-white rounded-full px-2 w-36 text-sm md:text-base m-auto my-1">
            Voir plus
          </p>
        </div>

        <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded">
          <h2 className="text-base text-black">Légumes</h2>
          <ul className="text-xs flex flex-wrap justify-around rounded bg-white mx-2 w-330 py-2 m-1.5">
            {vegetables.map((product) => (
              <li
                className="my-0.5  p-1 border-black border-2 w-5/12 bg-white text-black"
                key={product.id}
              >
                <img src={product.picture} alt={`Photo de ${product.name}`} />
                <h3>{product.name}</h3>
              </li>
            ))}
          </ul>

          <p className="bg-[#F5780A] text-white rounded-full px-2 w-36 text-sm md:text-base m-auto my-1">
            Voir plus
          </p>
        </div>
      </div>
      <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded ">
        <h2 className="text-black text-base">Tuto Jardinage</h2>
        <ul className="text-xs rounded py-3 md:flex md:justify-around m-15 flex flex-col items-center">
          {tutoData.map((tuto) => (
            <li
              className="my-0.5 mx-0.5 p-1 text-black m-1.5 w-full"
              key={tuto.id}
            >
              <img
                className="p-1"
                src={tuto.picture}
                alt={`Tuto de ${tuto.title}`}
              />
              <h3 className=" bg-white p-1">{tuto.title}</h3>
              <p className="p-1">{tuto.article}</p>
              <p className="bg-[#F5780A] rounded-full px-2 w-36 text-sm md:text-base m-auto my-1 text-white">
                Lire la suite
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
