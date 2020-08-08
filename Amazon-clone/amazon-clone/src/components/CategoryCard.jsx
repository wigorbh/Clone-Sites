import React from 'react';
import { Link } from 'react-router-dom';
import item from '../service/database/categoryItem';

import '../style/CategoryCard.css';

const CategoryCard = (props) => {
  return (
    <div className="card-layout">
      {item.map(elem => (
        <div className="card-category">
          <h2>{elem.title}</h2>
          <img src={elem.img} alt=""/>
          <Link to={'/:id'}>{elem.option}</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
