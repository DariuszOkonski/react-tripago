import { useEffect, useState } from "react";
import './TripList.css';

export default function TripList() {    
    
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips')

    const fetchTrips = async() => {
        const response = await fetch(url);
        const json = await response.json();
        setTrips(json);
    }


    useEffect(() => {
        
        fetchTrips();

    }, [url]);

    console.log(url)
    
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

            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                    European Trips
                </button>

                <button onClick={() => setUrl('http://localhost:3000/trips?loc=america')}>
                    American Trips
                </button>
                
                <button onClick={() => setUrl('http://localhost:3000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
