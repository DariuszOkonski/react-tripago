import { useEffect, useState } from "react";

export default function TripList() {    
    
    const [trips, setTrips] = useState([]);

    console.log(trips)

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => setTrips(json));        
    }, []);

    
    return (
        <div>
            <h2>Trip list</h2>
        </div>
    )
}
