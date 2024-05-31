import { Product } from '../../@types/types';

export default function findFavProduct(
  favProducts: Product[],
  searchedProductId: number
) {
  if (favProducts.find((favProduct) => favProduct.id === searchedProductId)) {
    return true;
  }
  return false;
}
