import './contact.css';
import img1 from './../../assets/walking-img.webp'

export default function ContactUs() {
  return (
    
    <section className='sectionContact'>
      <h2 className="contact-title">Contact Us</h2>
      
      
      <div className="contact-section">
        <div className="contact-image">
          <div className="square"></div>
          <img className='contactIMG1' src={img1} alt="img1" />
          <div className="square-reverse"></div>

        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          {['Name', 'Email', 'Subject'].map((label, index) => (
            <label className="form-group" key={index}>
              <span>{label}</span>
              <input type="text" required placeholder={label} />
            </label>
          ))}
          <label className="form-group">
            <span>Message</span>
            <textarea required placeholder="Message" />
          </label>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>

      </div>
    </section>
  );
}
