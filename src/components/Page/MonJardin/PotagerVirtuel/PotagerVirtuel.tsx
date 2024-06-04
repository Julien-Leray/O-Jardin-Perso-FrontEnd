import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setHorizontal, setVertical } from '../../../../store/reducers/potager';
import {
  updateProductPosition,
  fetchAllProductsInVirtualGarden,
  fetchMatchingProducts,
  removeProductFromVirtualGarden,
} from '../../../../store/thunks/virtualGardenThunks';
import {
  addToGarden,
  addToVirtualGarden,
} from '../../../../store/reducers/virtualGardenReducer';
import { Product } from '../../../../@types/types';
import PotagerSearchBar from '../../../SearchBar/PotagerSearchBar';

function PotagerVirtuel() {
  const dispatch = useAppDispatch();
  const { horizontal, vertical } = useAppSelector((state) => state.potager);
  const products = useAppSelector((state) => state.virtualGarden.products);
  const garden = useAppSelector((state) => state.virtualGarden.garden);
  const favProducts = useAppSelector((state) => state.myGarden.favProducts);
  const productsToDisplay = garden.concat(favProducts);
  console.log('productsToDisplay', productsToDisplay);
  const matchingProducts = useAppSelector(
    (state) => state.virtualGarden.matchingProducts
  );
  const favorites = useAppSelector((state) => state.myGarden.favProducts);
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchAllProductsInVirtualGarden()).then(() => {
      dispatch(fetchMatchingProducts());
    });
  }, [dispatch]);

  useEffect(() => {
    const favoriteIds = new Set(garden.map((product) => product.id));
    favorites.forEach((product) => {
      if (!favoriteIds.has(product.id)) {
        dispatch(addToGarden({ ...product, position: '' }));
      }
    });
  }, [favorites, garden, dispatch]);

  const handleDragStart = (product: Product) => {
    setDraggedProduct(product);
  };

  const handleDrop = async (position: string) => {
    if (draggedProduct) {
      await dispatch(
        updateProductPosition({ product_id: draggedProduct.id, position })
      );
      await dispatch(
        addToVirtualGarden({
          product_id: draggedProduct.id,
          position,
          quantity: 1,
        })
      );
      await dispatch(fetchAllProductsInVirtualGarden());
      await dispatch(fetchMatchingProducts());
      setDraggedProduct(null);
    }
  };

  const handleAddToGarden = (product: Product) => {
    const productInGarden = productsToDisplay.find((p) => p.id === product.id);
    if (productInGarden) {
      return;
    }
    dispatch(addToGarden({ ...product, position: '' }));
  };

  const handleRemoveFromGarden = async (product_id: number) => {
    await dispatch(removeProductFromVirtualGarden(product_id));
    await dispatch(fetchAllProductsInVirtualGarden());
    await dispatch(fetchMatchingProducts());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < vertical; row += 1) {
      const cols = [];
      for (let col = 0; col < horizontal; col += 1) {
        const position = `{${row},${col}}`;
        const product = matchingProducts.find((p) => {
          const regex = /\{(\d+), (\d+)\}/;
          const match = p.position && p.position.match(regex);
          if (match) {
            const positionObj = {
              row: parseInt(match[1], 10),
              col: parseInt(match[2], 10),
            };
            return positionObj.row === row && positionObj.col === col;
          }
          return false;
        });

        cols.push(
          <div
            key={`${row}-${col}`}
            onDrop={() => handleDrop(position)}
            onDragOver={handleDragOver}
            className="border border-gray-300 w-24 h-24 flex items-center justify-center bg-green-100"
          >
            {product && (
              <div
                className="relative flex flex-col items-center"
                draggable
                onDragStart={() => handleDragStart(product)}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}${product.picture}`}
                  alt={product.name}
                  className="w-16 h-16"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFromGarden(product.id)}
                  className="absolute top-0 right-0 bg-blue-500 text-white p-1 rounded-full"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
        );
      }
      rows.push(
        <div key={row} className="flex">
          {cols}
        </div>
      );
    }
    return rows;
  };

  console.log('garden', garden);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-xl rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Potager Virtuel</h1>
        <p className="mb-4">Planifiez et visualisez votre potager virtuel.</p>
        <div className="flex justify-center mb-4">
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
        <div className="grid gap-1">{renderGrid()}</div>
      </div>
      <PotagerSearchBar products={products} addToGarden={handleAddToGarden} />
      <div className="mt-6 w-full">
        <h2 className="text-center text-xl font-bold mb-4">Mon Jardin</h2>
        <ul className="flex flex-wrap justify-center">
          {productsToDisplay.map((product) => (
            <li key={`garden-${product.id}`} className="w-1/4 p-2">
              <div className="border p-4 rounded bg-white shadow">
                <img
                  src={`${import.meta.env.VITE_API_URL}${product.picture}`}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                  draggable
                  onDragStart={() => handleDragStart(product)}
                />
                <div className="text-center mt-2 font-semibold">
                  {product.name}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PotagerVirtuel;
