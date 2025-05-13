import "./testimonials.css";
import TestimonialCard from "./testimonialcard";
import TESTIMONIALS from "../../data/testimonials.json";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-title">
          <h1>TESTIMONIALS</h1>
        </div>
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            align={testimonial.align}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;