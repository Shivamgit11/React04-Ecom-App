import React from "react";
import classes from './Availablemeals.module.css';

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
]

const AvailableProduct = () => {
  const showProducts = productsArr.map((prod) => {
    return (
        <div>
      <li>
        <span>title={prod.title}</span>
        <span><img src={prod.imageUrl} alt="some things here" /></span>
        <span className={classes.image}>price={prod.price}</span>
        <button>Add to cart</button>
        
      </li>
      </div>
    );
  });

  return (
    <section className={classes.box}>
      {showProducts}
    </section>
  );
};

export default AvailableProduct;
