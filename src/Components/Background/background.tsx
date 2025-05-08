import "./background.css";

interface BackgroundProps {
  imagePosition: string;
  image: string;
  title: string;
  text: string[];
}

function Background({ imagePosition, image, title, text }: BackgroundProps) {
  return (
    <div className={`section ${imagePosition === "right" ? "reverse" : ""}`}>
      <div className="image-block">
        <img src={image} alt="image" />
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
