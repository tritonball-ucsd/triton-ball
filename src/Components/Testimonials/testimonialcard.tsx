import "./testimonials.css";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  align?: string;
  imageUrl?: string; // example: "testimonials/someimage.webp"
}

function TestimonialCard({
  quote,
  author,
  align = "left",
  imageUrl,
}: TestimonialProps) {
  const isRight = align === "right";

  // Final image path (only if imageUrl exists)
  const resolvedImageUrl = imageUrl
    ? `${import.meta.env.BASE_URL}${imageUrl}`
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className={`testimonial-row ${isRight ? "reverse" : ""}`}>
        <div className="testimonial-content">
          <div className="quote-mark quote-left">“</div>
          <p className="quote-text">{quote}</p>
          <div className="quote-mark quote-right">”</div>
          <p className="quote-author">{author}</p>
        </div>
        {resolvedImageUrl && (
          <img
            src={resolvedImageUrl}
            alt={`Photo of ${author}`}
            className="quote-image"
          />
        )}
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
