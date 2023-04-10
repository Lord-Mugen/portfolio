import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.deploy} target="_blank">
        <img src={item.image} alt="project img" className="work__img" />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.deploy} target="_blank" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
