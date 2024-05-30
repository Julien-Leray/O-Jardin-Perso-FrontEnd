import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { Product, ProductInVirtualGarden } from '../../types/types';
import { RootState } from '../store';

interface UpdateProductPositionPayload {
  product_id: number;
  position: string;
}

export const fetchProducts = createAsyncThunk(
  'potagerVirtuel/fetchProducts',
  async () => {
    const response = await axiosInstance.get<Product[]>('/products');
    return response.data;
  }
);

export const fetchAllProductsInVirtualGarden = createAsyncThunk(
  'me/virtual-garden/fetchVirtualGarden',
  async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get<ProductInVirtualGarden[]>(
      `/me/virtual-garden`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

export const updateProductPosition = createAsyncThunk(
  'potagerVirtuel/updateProductPosition',
  async (payload: UpdateProductPositionPayload, { getState }) => {
    const { position, product_id } = payload;
    const token = localStorage.getItem('token');

    const dataToSend = {
      position,
      product_id,
      quantity: 1,
    };

    const response = await axiosInstance.post(
      `/me/virtual-garden`,
      dataToSend,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

export const fetchMatchingProducts = createAsyncThunk(
  'potagerVirtuel/fetchMatchingProducts',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const products = state.products.products;
    const virtualGardenProducts = state.virtualGarden.virtualGarden;

    function transformArrayToString(arr: string) {
      if (Array.isArray(arr) && arr.length === 2) {
        return `{${arr[0]}, ${arr[1]}}`;
      } else {
        return null;
      }
    }

    const matchingProducts = virtualGardenProducts
      .map((vgProduct) => {
        const fullProduct = products.find(
          (product) => product.id === vgProduct.product_id
        );
        const positionBadWrited = vgProduct.position;
        const positionWellWrited = transformArrayToString(positionBadWrited);

        return {
          ...fullProduct,
          position: positionWellWrited,
        };
      })
      .filter((product) => product !== undefined) as Product[];

    return matchingProducts;
  }
);
