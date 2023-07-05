import { BATTLE } from "./battle.constants";

const initialState = {
  playerOneName: "",
  playerTwoName: "",
  playerOneImage: null,
  playerTwoImage: null,
};

const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BATTLE.SET_PLAYER_NAME:
      return {
        ...state,
        [`${action.payload.id}Name`]: action.payload.name,
      };
    case BATTLE.SET_PLAYER_IMAGE:
      return {
        ...state,
        [`${action.payload.id}Image`]: action.payload.image,
      };
    case BATTLE.RESET_PLAYER:
      return {
        ...state,
        [`${action.payload}Name`]: "",
        [`${action.payload}Image`]: null,
      };
    default:
      return state;
  }
};

export default battleReducer;
