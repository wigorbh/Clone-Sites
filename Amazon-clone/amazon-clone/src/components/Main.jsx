import React from 'react';

import fujiMain from '../service/images/Fuji_Main.jpg';
import '../style/Main.css'
import CategoryCard from './CategoryCard';

const Main = () => {
  return (
  <div className="container">
    <div className="main">
      <img 
        className="main-image"
        src={fujiMain}
        alt="background image"
      />
      <CategoryCard />
    </div>
  </div>
  );
}

export default Main;
