import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import { Link } from "react-router-dom";
import {
  setPlayerName,
  setPlayerImage,
  resetPlayer,
} from "./state/battle/battle.actions";

const Battle = () => {
  const dispatch = useDispatch();
  const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } =
    useSelector((state) => state.battleReducer);

  const handleSubmit = (id, userName) => {
    dispatch(setPlayerName(id, userName));
    dispatch(setPlayerImage(id, `http://github.com/${userName}.png?size200`));
  };

  const handleReset = (id) => {
    dispatch(resetPlayer(id));
  };

  return (
    <div>
      <div className="row">
        {playerOneImage ? (
          <PlayerPreview avatar={playerOneImage} username={playerOneName}>
            <button className="reset" onClick={() => handleReset("playerOne")}>
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id="playerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        )}

        {playerTwoImage ? (
          <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
            <button className="reset" onClick={() => handleReset("playerTwo")}>
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id="playerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        )}
      </div>
      {playerOneImage && playerTwoImage ? (
        <Link
          to={{
            pathname: "results",
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
          className="button"
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
