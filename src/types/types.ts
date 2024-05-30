export interface Product {
  id: number;
  name: string;
  description: string;
  picture?: string;
  latin_name: string;
  category_id: number;
  position?: string;
  plantation_date:string;
  harvest_date : string;
  watering_frequency:string,
  
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

export interface ProductInVirtualGarden {
  product_id: number;
  position: string;
  quantity: number;
}

export const ItemTypes = {
  PRODUCT: 'product',
};
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
