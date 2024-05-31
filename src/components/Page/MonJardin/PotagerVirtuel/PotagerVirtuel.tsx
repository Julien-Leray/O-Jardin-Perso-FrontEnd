import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { setHorizontal, setVertical } from '../../../../store/reducers/potager';
import {
  updateProductPosition,
  fetchProducts,
  fetchAllProductsInVirtualGarden,
  fetchMatchingProducts,
} from '../../../../store/thunks/virtualGardenThunks';
import {
  addToGarden,
  addToVirtualGarden,
} from '../../../../store/reducers/virtualGardenReducer';
import { Product } from '../../../../types/types';
import PotagerSearchBar from '../../../SearchBar/PotagerSearchBar';

function PotagerVirtuel() {
  const dispatch = useAppDispatch();
  const { horizontal, vertical } = useAppSelector((state) => state.potager);
  const products = useAppSelector((state) => state.virtualGarden.products);
  const garden = useAppSelector((state) => state.virtualGarden.garden);
  const matchingProducts = useAppSelector(
    (state) => state.virtualGarden.matchingProducts
  );
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchAllProductsInVirtualGarden());
    dispatch(fetchMatchingProducts());
  }, [dispatch]);

  const handleDragStart = (product: Product) => {
    setDraggedProduct(product);
    console.log('Dragged product:', product);
  };

  const handleDrop = (position: string) => {
    console.log(draggedProduct);
    console.log('Drop position:', position);
    if (draggedProduct) {
      console.log('Dropped product:', draggedProduct);
      dispatch(
        updateProductPosition({ product_id: draggedProduct.id, position })
      );
      dispatch(
        addToVirtualGarden({
          product_id: draggedProduct.id,
          position,
          quantity: 1,
        })
      );
      dispatch(fetchAllProductsInVirtualGarden());
      dispatch(fetchMatchingProducts());
      setDraggedProduct(null);
    } else {
      console.log('No product is being dragged.');
    }
  };

  const handleAddToGarden = (product: Product) => {
    dispatch(addToGarden({ ...product, position: '' }));
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
            key={position}
            onDrop={() => handleDrop(position)}
            onDragOver={(e) => e.preventDefault()}
            className="border border-gray-500 w-16 h-16 flex items-center justify-center"
          >
            {product && (
              <img
                src={`http://localhost:4000/${product.picture}`}
                alt={product.name}
                draggable
                onDragStart={() => handleDragStart(product)}
                className="w-12 h-12"
              />
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

  return (
    <DndProvider backend={HTML5Backend}>
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
                onChange={(e) =>
                  dispatch(setHorizontal(Number(e.target.value)))
                }
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
          <div className="grid">{renderGrid()}</div>
        </div>
        <PotagerSearchBar products={products} addToGarden={handleAddToGarden} />
        <div className="mt-6 w-full">
          <h2 className="text-center font-bold mb-4">Mon Jardin</h2>
          <ul className="flex flex-wrap justify-center">
            {garden.map((product) => (
              <li key={product.id} className="w-1/4 p-2">
                <div className="border p-4 rounded">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${product.picture}`}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                    draggable
                    onDragStart={() => handleDragStart(product)}
                  />
                  <div className="text-center mt-2">{product.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DndProvider>
  );
}

export default PotagerVirtuel;
