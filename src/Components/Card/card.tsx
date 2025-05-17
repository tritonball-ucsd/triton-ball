import React from "react";
import "./card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = React.memo((props: CardProps) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} loading="lazy" />
      <div className="card-text-block">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
});

export default Card;
