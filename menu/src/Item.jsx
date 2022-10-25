import React, { useState } from "react";

const Item = ({ desc, img, price, title }) => {
  return (
    <article className="menu-item">
      <img src={img} alt="jihyo" className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Item;