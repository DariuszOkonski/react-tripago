import { useEffect, useState } from "react";
import './TripList.css';

export default function TripList() {    
    
    const [trips, setTrips] = useState([]);

    console.log(trips)

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => setTrips(json));        
    }, []);

    
    return (
        <div className="trip-list">
            <h2>Trip list</h2>
            <ul>
                {
                    trips.map(trip => {
                        return (<li key={trip.id}>
                            <h3>{trip.title}</h3>
                            <p>{trip.price}</p>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
