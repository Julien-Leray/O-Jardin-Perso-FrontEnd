import React from 'react';

function SquareMaker({
  horizontal,
  vertical,
}: {
  horizontal: number;
  vertical: number;
}) {
  const square = document.getElementById('square');

  return (
    <section
      id="square"
      className="flex
  "
    >
      {Array.from({ length: horizontal * vertical }).map(
        (el: any, indice: number) => (
          <div
            key={indice}
            className="border-black border-solid border-2 p-1.5 w-[10px] h-[10px]"
          />
        )
      )}
    </section>
  );
}

function PotagerVirtuel() {
  return (
    <div>
      <h1>Potager Virtuel</h1>
      <p>Planifiez et visualisez votre potager virtuel.</p>
      {SquareMaker({ horizontal: 5, vertical: 5 })}
    </div>
  );
}

export default PotagerVirtuel;
