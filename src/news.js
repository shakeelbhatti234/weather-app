import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsApp() {
  const [articles, setArticles] = useState([]);

  // News API Call (runs once on load)
  useEffect(() => {
    fetch(
      "https://api.thenewsapi.com/v1/news/top?api_token=6HzT9rBE4LWrhg7SklZGil8k57GgeZZn3rAcxZYe&locale=us&limit=5"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
      });
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-4">
        <h1 className="mb-0">Global Headlines</h1>
        <p className="lead">Powered by TheNewsAPI</p>
      </header>

      <main className="container my-5">
        {articles.length === 0 ? (
          <div className="text-center">
            <p>Loading news...</p>
          </div>
        ) : (
          articles.map((article) => (
            <div
              key={article.uuid}
              className="card mb-4 shadow-sm border-0 flex-md-row"
            >
              {article.image_url && (
                <img
                  className="card-img-left img-fluid w-100 w-md-25"
                  src={article.image_url}
                  alt={article.title}
                  style={{ maxWidth: "250px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description
                    ? article.description
                    : "No description available."}
                </p>
                <div className="mt-auto">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Read More
                  </a>
                </div>
                <small className="text-muted mt-2">
                  {new Date(article.published_at).toLocaleString()} |{" "}
                  {article.source}
                </small>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 border-top">
        <small>&copy; 2025 Global Headlines</small>
      </footer>
    </div>
  );
}

export default NewsApp;
