import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setHorizontal, setVertical } from '../../../../store/reducers/potager';
import { SquareMakerProps, Product } from '../../../../types/types';
import PotagerSearchBar from '../../../SearchBar/PotagerSearchBar';

function SquareMaker({ horizontal, vertical }: SquareMakerProps) {
  const squares = Array.from({ length: horizontal * vertical }).map(
    (_, index) => <div key={index} className="border border-black w-10 h-10" />
  );

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${horizontal}, 40px)`,
        justifyContent: 'center',
      }}
    >
      {squares}
    </div>
  );
}

function PotagerVirtuel() {
  const dispatch = useAppDispatch();
  const { horizontal, vertical } = useAppSelector((state) => state.potager);
  const allProducts = useAppSelector((state) => state.products.products);
  const [garden, setGarden] = useState<Product[]>([]);

  const addToGarden = (product: Product) => {
    setGarden((prevGarden) => [...prevGarden, product]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-xl rounded-lg text-center">
        <h1 className="text-xl font-bold mb-2">Potager Virtuel</h1>
        <p>Planifiez et visualisez votre potager virtuel.</p>
        <div className="flex justify-center my-4">
          <label className="mr-4">
            Horizontal:
            <input
              type="number"
              value={horizontal}
              onChange={(e) => dispatch(setHorizontal(Number(e.target.value)))}
              className="ml-2 border rounded px-2 py-1 w-16 text-center"
            />
          </label>
          <label>
            Vertical:
            <input
              type="number"
              value={vertical}
              onChange={(e) => dispatch(setVertical(Number(e.target.value)))}
              className="ml-2 border rounded px-2 py-1 w-16 text-center"
            />
          </label>
        </div>
        <SquareMaker horizontal={horizontal} vertical={vertical} />
      </div>
      <PotagerSearchBar products={allProducts} addToGarden={addToGarden} />
      <div className="mt-6 w-full">
        <h2 className="text-center font-bold mb-4">Mon Jardin</h2>
        <ul className="flex flex-wrap justify-center">
          {garden.map((product) => (
            <li key={product.id} className="w-1/4 p-2">
              <div className="border p-4 rounded">
                <img
                  src={`http://localhost:4000${product.picture}`}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="text-center mt-2">{product.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PotagerVirtuel;
