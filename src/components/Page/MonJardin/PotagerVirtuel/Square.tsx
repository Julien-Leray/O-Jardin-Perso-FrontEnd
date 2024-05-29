import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../../types/types';

interface SquareProps {
  position: string;
  children: React.ReactNode;
  moveProduct: (id: number, position: string, productId: number) => void;
}

function Square({ position, children, moveProduct }: SquareProps) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PRODUCT,
    drop: (item: { id: number; productId: number }) =>
      moveProduct(item.id, position, item.productId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`border border-black w-10 h-10 ${
        isOver ? 'bg-green-200' : ''
      }`}
    >
      {children}
    </div>
  );
}

export default Square;
