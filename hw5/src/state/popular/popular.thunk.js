import { getReposFailureAction, getReposLoadingAction, getReposSuccessAction, updateLanguage } from "./popular.actions";
import { fetchPopularRepos } from "../../requests";

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(updateLanguage)
    dispatch(getReposLoadingAction());
    fetchPopularRepos(selectedLanguage)
    .then(data => dispatch(getReposSuccessAction(data)))
    .catch(error => dispatch(getReposFailureAction(error)))
}