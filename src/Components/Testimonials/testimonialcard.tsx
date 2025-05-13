import "./testimonials.css";

interface TestimonialProps {
  quote: string;
  author: string;
  align?: string;
  imageUrl?: string;
}

function TestimonialCard({ quote, author, align = "left", imageUrl }: TestimonialProps) {
    console.log("align is:", align); // should print "left" and "right" per row

  const isRight = align === "right";
  return (
    <div className={`testimonial-row ${isRight ? "reverse" : ""}`}>
      <div className="testimonial-content">
        <div className="quote-mark quote-left">“</div>
        <p className="quote-text">{quote}</p>
        <div className="quote-mark quote-right">”</div>
        <p className="quote-author">{author}</p>
      </div>
      <img src={imageUrl} alt="testimonial" className="quote-image" />
    </div>
  );
}

export default TestimonialCard;