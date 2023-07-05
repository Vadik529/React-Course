import React from "react";
import { useSelector } from "react-redux";

export const Repos = () => {
  const loading = useSelector((state) => state.popularReducer.loading);
  const repos = useSelector((state) => state.popularReducer.repos);
  const error = useSelector((state) => state.popularReducer.error);

  if (error) {
    return <p>Error</p>;
  }
  return (
    <>
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
    </>
  );
};

