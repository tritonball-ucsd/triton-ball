import "./events.css"
import soccer from "../../assets/soccer.png"

function Events() {
    return (
        <div className="events-container">
            <div className="events-title" id='calendar'>
                <div className="events-title-text-block">
                    <h1>Events</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam quasi officiis consequatur adipisci sapiente aliquid id soluta maiores dolorum minus voluptatum dolore fugiat magni eum, possimus perferendis officia ipsam.</p>
                </div>
                <img src={soccer} alt="soccer" />
            </div>
            <div className="events-calendar">
                <div className="calendar-clipper">
                    <iframe
                    src="https://calendar.google.com/calendar/embed?src=tritonballtest%40gmail.com&ctz=America%2FLos_Angeles"
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    ></iframe>
                </div>
                </div>
        </div>
    )
}    

export default Events;