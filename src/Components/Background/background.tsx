import "./background.css";

interface BackgroundProps {
  imagePosition: string;
  image: string;
  player_image: string;
  title: string;
  text: string[];
}

function Background({ imagePosition, image, player_image,title, text }: BackgroundProps) {
  return (
    <div className={`section ${imagePosition === "right" ? "reverse" : ""}`}>
      <div className="image-block">
        <img src={image} alt="image" />
        <img className={`player-image${imagePosition==="right" ? "" : "-reverse"}`} src={player_image} alt="player"/>
      </div>
      <div className="text-block">
        <h2>{title}</h2>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default Background;
