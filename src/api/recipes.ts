import axios from 'axios';
import { RecipesResponse } from '../types';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecipes = async (limit: number = 8): Promise<RecipesResponse> => {
  const { data } = await api.get<RecipesResponse>(`/recipes?limit=${limit}`);
  return data;
};

export default api;
