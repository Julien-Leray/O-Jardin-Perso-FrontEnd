import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import data from '../../../data/data';
import tutoData from '../../../data/tuto';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import product from '../../../store/reducers/products';

function Home() {
  const fruits = data.filter((product) => product.category_id === 1);
  const vegetables = data.filter((product) => product.category_id === 2);

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
              {fruits.map((product) => (
                <li className="my-0.5 p-1 w-5/12 " key={product.id}>
                  <img
                    src={product.picture}
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
              <button type="button">Voir plus de fruits</button>{' '}
            </Link>
          </div>
        </div>
        <div className="w-full py-4">
          <h2 className="text-xl text-center font-bold p-2">Légumes </h2>
          <div className="flex flex-col bg-gray-200 rounded-lg p-4">
            <ul className="flex flex-wrap justify-around  ">
              {vegetables.map((product) => (
                <li className="my-0.5 p-1 w-5/12 " key={product.id}>
                  <img
                    src={product.picture}
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
        <ul className="m-15 flex flex-crow items-center  gap-2 md:gap-6">
          {tutoData.map((tuto) => (
            <li
              className="flex flex-col bg-gray-200  p-4   w-full rounded-lg"
              key={tuto.id}
            >
              <img
                className="p-1"
                src={tuto.picture}
                alt={`Tuto de ${tuto.title}`}
              />
              <h3 className="font-bold">{tuto.title}</h3>
              {/* <p className="p-1">{tuto.article}</p> */}
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
