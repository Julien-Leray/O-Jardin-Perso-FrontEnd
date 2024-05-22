export interface Product {
  id: number;
  name: string;
  description: string;
  picture?: string;
  latin_name: string;
  category_id: number;
}

export interface ProductsState {
  products: Product[];
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

// Tutorials

export interface Tutorials {
  id: number;
  picture: string;
  title: string;
  article: string;
}

export interface TutorialsState {
  tuto: Tutorials[];
  loading: boolean;
  error: string | null | undefined;
}
