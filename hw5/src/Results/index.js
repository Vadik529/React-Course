import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeBattle } from "../requests";
import Player from "../Player";
import {
  setWinner,
  setLoser,
  setError,
  setLoading,
} from "../state/results/results.actions";

const Results = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, winner, loser, error } = useSelector(
    (state) => state.resultsReducer
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    dispatch(setLoading(true));

    makeBattle([params.get("playerOneName"), params.get("playerTwoName")])
      .then(([winner, loser]) => {
        dispatch(setWinner(winner));
        dispatch(setLoser(loser));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch, location.search]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="row">
      <Player label="Winner" score={winner.score} profile={winner.profile} />
      <Player label="Loser" score={loser.score} profile={loser.profile} />
    </div>
  );
};

export default Results;
