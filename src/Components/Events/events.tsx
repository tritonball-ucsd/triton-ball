import "./events.css"
import soccer from "../../assets/Vectors/soccer.png"

function Events() {
    return (
        <div className="events-container">
            <div className="events-title" id='calendar'>
                <div className="events-title-text-block">
                    <h1>Events</h1>
                    <p>Check out our upcoming meetings, speaker sessions, and project showcases on the calendar below—and join us as we dive into the numbers behind the games!</p>
                    <p>👇 Stay up to date with our Google Calendar:</p>
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