import React from 'react';
import { useDrag } from 'react-dnd';
import { Product } from '../../../../types/types';

const ItemTypes = {
  PRODUCT: 'product',
};

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
      {product.name}
    </div>
  );
}

export default DraggableProduct;
