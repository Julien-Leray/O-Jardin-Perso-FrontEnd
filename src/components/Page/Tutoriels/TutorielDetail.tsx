import React from 'react';
import { useParams } from 'react-router-dom';
import tutoriels from '../../../data/data';

function TutorielDetail() {
  const { titre } = useParams();
  const tutoriel = tutoriels.find((t) => t.id.toString() === titre);

  if (!tutoriel) {
    return <div>Tutoriel non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center font-bold text-3xl mb-6">{tutoriel.name}</div>
      <img
        src={tutoriel.picture}
        alt={tutoriel.name}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-4">{tutoriel.description}</p>
    </div>
  );
}

export default TutorielDetail;
