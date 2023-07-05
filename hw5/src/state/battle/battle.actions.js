import { BATTLE } from "./battle.constants";

export const setPlayerName = (id, name) => ({
  type: BATTLE.SET_PLAYER_NAME,
  payload: { id, name },
});

export const setPlayerImage = (id, image) => ({
  type: BATTLE.SET_PLAYER_IMAGE,
  payload: { id, image },
});

export const resetPlayer = (id) => ({
  type: BATTLE.RESET_PLAYER,
  payload: id,
});


