import React from 'react';
import Square from './Square';
import DraggableProduct from './DraggableProduct';
import { Product, SquareMakerProps } from '../../../../types/types';

function SquareMaker({
  horizontal,
  vertical,
  products,
  moveProduct,
}: SquareMakerProps) {
  const squares = [];
  for (let row = 0; row < vertical; row += 1) {
    for (let col = 0; col < horizontal; col += 1) {
      const position = `${String.fromCharCode(65 + row)}${col + 1}`;
      const product = products.find((p) => p.position === position);
      squares.push(
        <Square key={position} position={position} moveProduct={moveProduct}>
          {product && <DraggableProduct product={product} />}
        </Square>
      );
    }
  }

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

export default SquareMaker;
