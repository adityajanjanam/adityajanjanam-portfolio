/* global process */
import * as React from "react";
const { useEffect, useState } = React;

// Use /user/repos for authenticated requests to get all repos (public, private, forks)
const GITHUB_API_URL = `https://api.github.com/user/repos?sort=updated&per_page=100`;
// Store your token in an environment variable for security
// eslint-disable-next-line no-undef
const GITHUB_TOKEN = typeof process !== 'undefined' && process.env && process.env.REACT_APP_GITHUB_TOKEN
  ? process.env.REACT_APP_GITHUB_TOKEN
  : (window._env_ && window._env_.REACT_APP_GITHUB_TOKEN ? window._env_.REACT_APP_GITHUB_TOKEN : undefined);

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        console.log('GitHub API response:', data);
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading GitHub projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">GitHub Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {repo.name}
              </a>
            </h3>
            <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">{repo.description || "No description"}</p>
            <div className="flex flex-wrap gap-2">
              {repo.language && (
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-medium">
                  {repo.language}
                </span>
              )}
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">⭐ {repo.stargazers_count}</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">🍴 {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubProjects;
