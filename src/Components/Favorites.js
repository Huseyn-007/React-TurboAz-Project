import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
import { useSelector } from "react-redux";

export default function Favorites() {
  const [cars, setCars] = useState([]);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    fetch("http://localhost:3002/cars")
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error(error));
  }, []);

  const favoriteCars = cars.filter(car => user && user.favorites.includes(car.id));

  return (
    <div className='container'>
      {favoriteCars.length > 0 ? (
        favoriteCars.map(car => (
          <Link to={`/car/${car.id}`} key={car.id} className="card">
            <img src={car.Images[0]} alt={`${car.Marka} ${car.Model}`} className="car-image" />
            <div className="card-content">
              <FontAwesomeIcon
                icon={faHeart}
                className="heart-icon liked" 
                style={{color:"red"}}
              />
              <h2>{car.Price} AZN</h2>
              <p className="car-details">{car.Marka} {car.Model}</p>
              <p className="car-details">{car.Year}, {car.Km} km</p>
              <p className="location">Baku, {car.Year}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No favorite cars found.</p>
      )}
    </div>
  );
}
