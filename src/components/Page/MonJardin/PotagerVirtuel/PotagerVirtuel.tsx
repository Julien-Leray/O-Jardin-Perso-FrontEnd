
import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { updateProductPosition, fetchProducts } from '../../../../store/thunks/virtualGardenThunks';
import { addToGarden } from '../../../../store/reducers/virtualGardenReducer';
import { Product } from '../../../../types/types';
import PotagerSearchBar from '../../../SearchBar/PotagerSearchBar';

const gridSize = 10; // Taille du quadrillage

function PotagerVirtuel() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const garden = useAppSelector((state) => state.virtualGarden.garden);
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDragStart = (product: Product) => {
    console.log('Drag start:', product);
    setDraggedProduct(product);
  };

  const handleDrop = (row: number, col: number) => {
    console.log('Drop position:', { row, col });
    if (draggedProduct) {
      console.log('Dropped product:', draggedProduct);
      dispatch(updateProductPosition({ product_id: draggedProduct.id, position: {row, col} }));
      setDraggedProduct(null);
    }
  };

  const handleAddToGarden = (product: Product) => {
    console.log('Adding to garden:', product);
    dispatch(addToGarden({ ...product, position: '' }));
  };

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < gridSize; row++) {
      const cols = [];
      for (let col = 0; col < gridSize; col++) {
        const position = `${row}-${col}`;
        const product = garden.find((p) => p.position === position);
        cols.push(
          <div
            key={position}
            onDrop={() => handleDrop(position)}
            onDragOver={(e) => e.preventDefault()}
            className="border border-gray-500 w-16 h-16 flex items-center justify-center"
          >
            {product && (
              <img
                src={`http://localhost:4000${product.picture}`}
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
      <h1 className="text-xl font-bold mb-4">Potager Virtuel</h1>
      <PotagerSearchBar products={products} addToGarden={handleAddToGarden} />
      <div className="grid">{renderGrid()}</div>
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
  );
}

export default PotagerVirtuel;