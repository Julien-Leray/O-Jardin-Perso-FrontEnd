export interface Product {
  id: number;
  name: string;
  description: string;
  picture?: string;
  latin_name: string;
  category_id: number;
  position?: string;
}

export interface ProductsState {
  products: Product[];
  fruits: Product[];
  legumes: Product[];
  selectedFruit?: Product | null;
  selectedLegume?: Product | null;
  loading: boolean;
  error: string | null | undefined;
}

export interface SquareMakerProps {
  horizontal: number;
  vertical: number;
  products: Product[];
  moveProduct: (id: number, position: string, productId: number) => void;
}

export const ItemTypes = {
  PRODUCT: 'product',
};

export interface SquareMakerProps {
  horizontal: number;
  vertical: number;
}


export interface Tutorial {
  id: number;
  picture: string;
  title: string;
  article: string;
}

export interface TutorialsState {
  tuto: Tutorial[];
  loading: boolean;
  error: string | null | undefined;
}

// Météo

export interface Meteo {
  name: string;
  temp: string;
  icon: string;
}

export interface MeteoState {
  meteo: Meteo[];
  loading: boolean;
  error: string | null | undefined;
  name: string;
}

// Users

export interface User {
  id: number;
  email: string;
  firstname: string;
  // lastname: string;
  // address: string;
  zip_code: string;
  city: string;
  // watering_alert: boolean;
  // forecast_alert: boolean;
  is_admin: boolean;
}
