import "./contact.css";
import contactUs from "./../../assets/Background/ContactUs3.webp";

export default function ContactUs() {
  return (
    <section className="sectionContact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-section">
        <div className="contact-image">
          <div className="square"></div>
          <img className="contactIMG1" src={contactUs} alt="img1" />
          <div className="square-reverse"></div>
        </div>

        <form
          className="contact-form"
          target="_blank"
          action="https://formsubmit.co/tritonball@ucsd.edu"
          method="POST"
        >
          {["Name", "Email", "Subject"].map((label, index) => (
            <label className="form-group" key={index}>
              <span>{label}</span>
              <input type="text" name={label} required placeholder={label} />
            </label>
          ))}
          <label className="form-group">
            <span>Message</span>
            <textarea name="Message" required placeholder="Message" />
          </label>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
