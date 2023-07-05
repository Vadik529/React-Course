import { RESULTS } from "./results.constants";

const initialState = {
  loading: true,
  winner: null,
  loser: null,
  error: null,
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESULTS.SET_WINNER:
      return { ...state, winner: action.payload };
    case RESULTS.SET_LOSER:
      return { ...state, loser: action.payload };
    case RESULTS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESULTS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default resultsReducer;
