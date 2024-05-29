import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { updateProductPosition, fetchProducts, fetchAllProductsInVirtualGarden, fetchMatchingProducts } from '../../../../store/thunks/virtualGardenThunks';
import { addToGarden, addToVirtualGarden } from '../../../../store/reducers/virtualGardenReducer';
import { Product } from '../../../../types/types';
import PotagerSearchBar from '../../../SearchBar/PotagerSearchBar';

const gridSize = 5;

function PotagerVirtuel() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.virtualGarden.products);
  const garden = useAppSelector((state) => state.virtualGarden.garden);
  const virtualGarden = useAppSelector((state) => state.virtualGarden.virtualGarden);
  const matchingProducts = useAppSelector((state) => state.virtualGarden.matchingProducts);
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);
  const [droppedProduct, setDroppedProduct] = useState<Product | null>(null);

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
    if (draggedProduct) {
      dispatch(updateProductPosition({ product_id: draggedProduct.id, position }));

      console.log('Dropped product at position:', position);
      setDraggedProduct(null);
    }
  };

  const handleAddToGarden = (product: Product) => {
    dispatch(addToGarden({ ...product, position: '' }));
  };

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < gridSize; row++) {
      const cols = [];
      for (let col = 0; col < gridSize; col++) {
        const position = `{${row},${col}}`;
        console.log(matchingProducts);
        const product = matchingProducts.find((p) => {
          const regex = /\{(\d+),(\d+)\}/;
          const match = p.position && p.position.match(regex);
          if (match) {
            const positionObj = {
              row: parseInt(match[1], 10),
              col: parseInt(match[2], 10)
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
    <div className="potager-virtuel">
      <h1 className="text-center text-xl font-bold mb-4">Potager Virtuel</h1>
      <div className="grid">{renderGrid()}</div>
      <div className="mt-6 w-full">
        <h2 className="text-center font-bold mb-4">Mon Jardin</h2>
        <PotagerSearchBar products={products} addToGarden={handleAddToGarden} />
        <ul className="flex flex-wrap justify-center">
          {garden.map((product) => (
            <li key={product.id} className="w-1/4 p-2">
              <div className="border p-4 rounded">
                <img
                  src={`http://localhost:4000/${product.picture}`}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                  draggable
                  onDragStart={() => handleDragStart(product)}
                  onDrop={() => handleDrop(product.position || '')}
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
