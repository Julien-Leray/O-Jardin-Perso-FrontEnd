import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes, Product } from '../../../../@types/types';

interface DraggableProductProps {
  product: Product;
}

function DraggableProduct({ product }: DraggableProductProps) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PRODUCT,
    item: { id: product.id, productId: product.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 m-2 bg-green-500 text-white rounded ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <img
        src={`${import.meta.env.VITE_API_URL}${product.picture}`}
        alt={product.name}
        className="w-12 h-12"
      />
      {product.name}
    </div>
  );
}

export default DraggableProduct;
