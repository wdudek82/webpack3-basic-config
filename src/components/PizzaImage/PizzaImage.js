import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/images/pizza.jpg';

const pizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} alt="Pizza Image" className={classes.PizzaImage} />
  </div>
);

export default pizzaImage;
