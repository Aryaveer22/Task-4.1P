import React from 'react';
import './TutorialCard.css';

function TutorialCard({ image, title, description, rating, author }) {
  return (
    <div className="tutorial-card">
      <img src={image} alt="Tutorial" className="tutorial-image" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="rating">
        <span role="img" aria-label="star">⭐</span> {rating} {author}
      </div>
    </div>
  );
}

export default TutorialCard;
