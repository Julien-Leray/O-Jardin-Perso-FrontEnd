import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchFruits } from '../../../../store/reducers/products';

function Fruits() {
  const dispatch = useAppDispatch();
  const { fruits, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <div>
      <h1>Fruits</h1>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur: {error}</p>}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
