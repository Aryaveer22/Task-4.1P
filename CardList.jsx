import React from 'react';
import ArticleCard from './ArticleCard';
import './CardList.css';

function CardList({ articles }) {
  return (
    <div className="card-list">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          image={article.image}
          title={article.title}
          description={article.description}
          rating={article.rating}
          author={article.author}
        />
      ))}
    </div>
  );
}

export default CardList;
