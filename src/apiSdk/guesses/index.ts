import axios from 'axios';
import queryString from 'query-string';
import { GuessInterface, GuessGetQueryInterface } from 'interfaces/guess';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGuesses = async (query?: GuessGetQueryInterface): Promise<PaginatedInterface<GuessInterface>> => {
  const response = await axios.get('/api/guesses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGuess = async (guess: GuessInterface) => {
  const response = await axios.post('/api/guesses', guess);
  return response.data;
};

export const updateGuessById = async (id: string, guess: GuessInterface) => {
  const response = await axios.put(`/api/guesses/${id}`, guess);
  return response.data;
};

export const getGuessById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/guesses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGuessById = async (id: string) => {
  const response = await axios.delete(`/api/guesses/${id}`);
  return response.data;
};
