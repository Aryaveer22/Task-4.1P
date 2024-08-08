import React from 'react';
import { createRoot } from 'react-dom/client';
import NavigationBar from './NavigationBar';
import './navigationbar.css';
import HeaderImage from './HeaderImage';
import FeaturedArticles from './FeaturedArticle';
import FeaturedTutorials from './FeaturedTutorials';
import SubscriptionBar from './SubscriptionBar';
import Footer from './Footer';


// Define a simple functional component
const MyComponent = () => {
  return (
    <div>
      <NavigationBar />
      <HeaderImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SubscriptionBar />
      <Footer />
    </div>
  );
};

// Get the root container element
const container = document.getElementById('root');

// Create a root and render the component
const root = createRoot(container);
root.render(<MyComponent />);

