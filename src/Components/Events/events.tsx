import "./events.css"
import soccer from "../../assets/Vectors/soccer.png"

function Events() {
    return (
        <div className="events-container">
            <div className="events-title" id='calendar'>
                <div className="events-title-text-block">
                    <h1>Events</h1>
                    <p>Lorems is a really weird word ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam quasi officiis consequatur adipisci sapiente aliquid id soluta maiores dolorum minus voluptatum dolore fugiat magni eum, possimus perferendis officia ipsam.</p>
                </div>
                <img src={soccer} alt="soccer" />
            </div>
            <div className="events-calendar">
                <div className="calendar-clipper">
                    <iframe
                    src={import.meta.env.VITE_CALENDAR_API_KEY}
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    ></iframe>
                </div>
                </div>
        </div>
    )
}    

export default Events;