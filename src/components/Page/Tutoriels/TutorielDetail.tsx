import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchTutorialDetails } from '../../../store/thunks/tutorielsThunk';
import { Tutorial } from '../../../types/types';

interface TutoDetailProps {
  tutorials: Tutorial[];
}

function TutorielDetail({ tutorials }: TutoDetailProps) {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const tutorial = tutorials.find((tuto) => tuto.id);

  useEffect(() => {
    if (id) {
      dispatch(fetchTutorialDetails());
    }
  }, [dispatch, id]);

  if (!tutorial) {
    return (
      <div className="container mx-auto px-4 py-8">Tutoriel non trouvé</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center font-bold text-3xl mb-4">
        {tutorial.title}
      </div>
      <img
        src={`http://localhost:4000${tutorial.picture}`}
        alt={tutorial.title}
        className="mx-auto w-full max-w-xl h-auto object-cover rounded-lg shadow-lg"
      />
      <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        {tutorial.article}
      </p>
    </div>
  );
}

export default TutorielDetail;
