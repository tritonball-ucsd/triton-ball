import "./testimonials.css";
import { motion } from "framer-motion";


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
        <img src={imageUrl} alt="testimonial" className="quote-image" />
      </div>
    </motion.div>
  );
}

export default TestimonialCard;