import React from 'react';
import CardList from './CardList';
import './FeaturedArticles.css';

function FeaturedArticles() {
  const articles = [
    {
      image: require('./images/article1.png'),
      title: "REACT",
      description: "React",
      rating: 5,
      author: "Aryaveer"
    },
    {
      image: require('./images/article2.png'),
      title: "NodeJS",
      description: "NodeJS",
      rating: 5,
      author: "Aryaveer"
    },
    {
      image: require('./images/article3.png'),
      title: "HTML",
      description: "HTML, CSS",
      rating: 5,
      author: "Aryaveer"
    }
  ];

  return (
    <div className="featured-articles">
      <h1>Featured Articles</h1>
      <CardList articles={articles} />
      <button className="see-all-articles">See all articles</button>
    </div>
  );
}

export default FeaturedArticles;
