export interface Product {
  id: number;
  name: string;
  description: string;
  picture?: string;
  latin_name: string;
  category_id: number;
  position?: string;
  isFav: boolean;
}

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
  address: string;
  city: string;
  created_at: string;
  email: string;
  firstname: string;
  forecast_alert: boolean;
  id: number;
  is_admin: boolean;
  lastname: string;
  updated_at: null;
  watering_alert: boolean;
  zip_code: string;
}

export interface UserData {
  address: string;
  city: string;
  email: string;
  firstname: string;
  forecast_alert: boolean;
  id: null | number;
  lastname: string;
  watering_alert: boolean;
  zip_code: string;
  created_at: string;
  updated_at: null;
  is_admin: boolean;
}
