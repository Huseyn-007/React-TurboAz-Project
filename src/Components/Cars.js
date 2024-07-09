import React, { useEffect, useState } from 'react'

export default function Cars() {
    const [cars, setCars]  = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/cars")
        .then(response=>response.json())
        .then(data=>setCars(data))
        .catch(error=>console.error(error));
        
    },[])


  return (
    <div className='container'>
        {cars.map(car =>(
            <div key={car.Id} className="card">
            <img src={car.ImageUrl} alt={`${car.Marka} ${car.Model}`} className="car-image" />
            <div className="card-content">
              <h2 style={{color:"black"}}>{car.Price} AZN</h2>
              <p className="car-details">{car.Marka} {car.Model}</p>
              <p className="car-details">{car.Year}, {car.Km} km</p>
              <p className="location">Baku, {car.Year}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
