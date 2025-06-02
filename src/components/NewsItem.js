import React, { Component } from 'react';
import './NewsItem.css'; // Import custom CSS (you'll create this file)

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="news-item my-4">
        <div className="card shadow-sm news-card">
          <div className="position-absolute top-0 end-0 p-2">
            <span className="badge bg-danger">{source}</span>
          </div>
          <img
            src={imageUrl || "https://frequentmiler.com/wp-content/uploads/2025/05/Single-Person-in-airport.jpg"}
            className="card-img-top news-img"
            alt="News"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 60) + '...' : "Untitled"}</h5>
            <p className="card-text">{description ? description.slice(0, 100) + '...' : "No description available."}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author || "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark">
              Read More →
            </a>
          </div>
        </div>
      </div>
    );
  }
}
