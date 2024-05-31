import { Tutorial } from '../../@types/types';
import slugify from '../../utils/utils';

export default function findTuto(tutorials: Tutorial[], searchedTuto: string) {
  const foundTuto = tutorials.find((tuto) => {
    return slugify(tuto.title) === searchedTuto;
  });
  return foundTuto;
}
