// lib/collection.ts
import axios from 'axios';
import { Card, NewCard } from './common.types';

const BASE_URL = 'http://localhost:8001'; // I would move it to .env file but for simplicity lets keep it here

export const fetchCollection = async (): Promise<Card[]> => {
  const { data } = await axios.get(`${BASE_URL}/cards`);
  return data;
};

export const createCard = async (newCard: NewCard) => {
  const response = await axios.post(`${BASE_URL}/cards`, newCard);
  return response.data;
};
