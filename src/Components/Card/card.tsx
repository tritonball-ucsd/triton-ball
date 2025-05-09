import "./card.css"

interface CardProps {
    image: string;
    title: string;
    description: string;
}



function Card(props: CardProps) {
    return (
        <div className="card">
            <img src={props.image} alt="image"/>
            <div className="card-text-block">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;