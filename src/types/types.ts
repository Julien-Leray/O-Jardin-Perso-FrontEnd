export interface Product {
  id: number;
  name: string;
  description: string;
  picture?: string;
}

export interface ProductsState {
  fruits: Product[];
  legumes: Product[];
  selectedFruit?: Product | null;
  selectedLegume?: Product | null; // Ajout de null comme type acceptable
  loading: boolean;
  error: string | null | undefined;
}
// interface du potagervirtuel

export interface SquareMakerProps {
  horizontal: number;
  vertical: number;
}
