import React, { useState, useEffect } from "react";
import { fetchPopularRepos } from "./api";
import { useLocation, useNavigate } from "react-router-dom";

const languages = ["All", "JS", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const selectedLanguage = queryParams.get("lang") || "All";

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [selectedLanguage]);
  const handleLanguageClick = (language) => {
    if (loading) {
      return;
    }
    queryParams.set("lang", language);
    navigate({ search: queryParams.toString() });
  };
  return (
    <div>
      <ul className="languages">
        {languages.map((language, index) => (
          <li
            className={loading ? "disabled" : ""}
            key={index}
            style={{
              color: language === selectedLanguage ? "#d0021b" : "#000000",
            }}
            onClick={() => handleLanguageClick(language)}
          >
            {language}
          </li>
        ))}
      </ul>

      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}

      <ul className={`popular-list ${loading ? "loading" : ""}`}>
        {repos.map((repo, index) => {
          return (
            <li key={index} className="popular-item">
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img
                    alt="avatar"
                    className="avatar"
                    src={repo.owner.avatar_url}
                  />
                </li>
                <li>
                  <a
                    href={repo.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {repo.name}
                  </a>
                </li>
                <li>{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Popular;
