import { useParams } from 'react-router-dom';
import { Tutorial } from '../../../@types/types';
import findTuto from '../../../store/selectors/tutos';
import slugify from '../../../utils/utils';

interface TutoDetailProps {
  tutorials: Tutorial[];
}

function TutorielDetail({ tutorials }: TutoDetailProps) {
  const params = useParams();
  const tutorial = findTuto(tutorials, slugify(params.title));

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
        src={`${import.meta.env.VITE_APP_API_URL}${tutorial.picture}`}
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
