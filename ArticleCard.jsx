import React from 'react';
import './ArticleCard.css';

function ArticleCard({ image, title, description, rating, author }) {
  return (
    <div className="article-card">
      <img src={image} alt="Article" className="article-image" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="rating">
        <span role="img" aria-label="star">⭐</span> {rating} {author}
      </div>
    </div>
  );
}

export default ArticleCard;
