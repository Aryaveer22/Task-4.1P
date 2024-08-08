import React from 'react';
import TutorialCard from './TutorialCard';
import './TutorialList.css';

function TutorialList({ tutorials }) {
  return (
    <div className="tutorial-list">
      {tutorials.map((tutorial, index) => (
        <TutorialCard
          key={index}
          image={tutorial.image}
          title={tutorial.title}
          description={tutorial.description}
          rating={tutorial.rating}
          author={tutorial.author}
        />
      ))}
    </div>
  );
}

export default TutorialList;
