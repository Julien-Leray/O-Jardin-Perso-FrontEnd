export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface ProductsState {
  fruits: Product[];
  legumes: Product[];
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
  name: string;
  description: string;
}

export interface TutorialsState {
  tuto: Tutorials[];
  loading: boolean;
  error: string | null | undefined;
}