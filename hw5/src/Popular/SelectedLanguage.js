import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../state/popular/popular.thunk";

const languages = ["All", "JS", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.popularReducer.selectedLanguage
  );

  useEffect(() => {
    dispatch(getRepos(selectedLanguage));
  }, []);
  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: language === selectedLanguage ? "#d0021b" : "#000000",
          }}
          onClick={() => dispatch(getRepos(language))}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};

export default SelectedLanguage;
