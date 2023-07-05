import { RESULTS } from "./results.constants";
export const setWinner = (winner) => ({
  type: RESULTS.SET_WINNER,
  payload: winner,
});

export const setLoser = (loser) => ({
  type: RESULTS.SET_LOSER,
  payload: loser,
});

export const setError = (error) => ({
  type: RESULTS.SET_ERROR,
  payload: error,
});

export const setLoading = (loading) => ({
  type: RESULTS.SET_LOADING,
  payload: loading,
});
