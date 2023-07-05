import { combineReducers } from "redux";
import {popularReducer} from "./popular/popular.reducer"
import battleReducer from "./battle/battle.reducer"
import resultsReducer from "./results/results.reducer"

export default combineReducers ({
    popularReducer,
    battleReducer, 
    resultsReducer
})