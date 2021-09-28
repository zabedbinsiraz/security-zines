import React from "react";
import './Item.css';

const Item = ({ item }) => {
  return (
    
      <div className="col-md-3 text-center" style={{ padding: "0", paddingLeft: "0" }}>
        <a href="/">
          <img
            data-bss-hover-animate="pulse"
            className="zines-img animated pulse"
            src={item.img}
            alt=""
            srcset=""
          />
          <h1 className="d-flex justify-content-center zines-img-title">
            {item.title}
          </h1>
        </a>
      </div>
 
  );
};

export default Item;
