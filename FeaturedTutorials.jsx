import React from 'react';
import TutorialList from './TutorialList';
import './FeaturedTutorials.css';

function FeaturedTutorials() {
  const tutorials = [
    {
      image: require('./images/tutorial1.png'),
      title: "Something",
      description: "ABC",
      rating: 4,
      author: "AVJ"
    },
    {
      image: require('./images/tutorial2.png'),
      title: "Nothing",
      description: "DEF",
      rating: 4,
      author: "AVJ"
    },
    {
      image: require('./images/tutorial3.png'),
      title: "Everything",
      description: "XYZ",
      rating: 4.9,
      author: "AVJ"
    }
  ];

  return (
    <div className="featured-tutorials">
      <h1>Featured Tutorials</h1>
      <TutorialList tutorials={tutorials} />
      <button className="see-all-tutorials">See all tutorials</button>
    </div>
  );
}

export default FeaturedTutorials;
