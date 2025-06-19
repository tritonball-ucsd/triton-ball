import React from "react";
import "./card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card = React.memo((props: CardProps) => {
  return (
    <div className="card">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={`${import.meta.env.BASE_URL}${props.image}`} alt={props.title} />
      <div className="card-text-block">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      </a>
    </div>
  );
});

export default Card;
