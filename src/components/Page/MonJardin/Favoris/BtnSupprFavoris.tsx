import { X } from 'react-feather';
import { fetchDeleteFav } from '../../../../store/thunks/favoritesThunks';
import { Product } from '../../../../@types/types';
import { useAppDispatch } from '../../../../hooks/redux';
import fetchUserData from '../../../../store/thunks/myGardenThunks';

interface BtnSupprFavorisProps {
  allFavProducts: Product[];
  product: Product;
}

function BtnSupprFavoris({ product, allFavProducts }: BtnSupprFavorisProps) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        type="button"
        className="mr-4 mt-4 text-white rounded-full bg-[#16A1AF]"
        onClick={(event) => {
          event.preventDefault();
          dispatch(fetchDeleteFav(product.id));
          dispatch(fetchUserData());
        }}
      >
        <X size="35" className="rounded-full p-2" />
      </button>
    </div>
  );
}

export default BtnSupprFavoris;
