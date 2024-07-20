import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFavorites } from '../Reducers/actions';

export default function Cars() {
  const [cars, setCars] = useState([]);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3002/cars")
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error(error));
  }, []);

  const handleLikeClick = (carId) => {
    if (!user || !Array.isArray(user.favorites)) {
      console.error('User or favorites array is not defined.');
      return;
    }

    const updatedFavorites = user.favorites.includes(carId)
      ? user.favorites.filter(id => id !== carId)
      : [...user.favorites, carId];


    fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...user, favorites: updatedFavorites }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch(updateFavorites(updatedFavorites));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      {cars.map(car => (
        <Link to={`/car/${car.id}`} key={car.id} className="card">
          <img src={car.Images[0]} alt={`${car.Marka} ${car.Model}`} className="car-image" />
          <div className="card-content">
            {user && (
              <FontAwesomeIcon
                icon={faHeart}
                className={`heart-icon ${user.favorites.includes(car.id) ? 'liked' : ''}`}
                  onClick={(e) => {
                  e.preventDefault();
                  handleLikeClick(car.id);
                }}
              />
            )}
            <h2>{car.Price} AZN</h2>
            <p className="car-details">{car.Marka} {car.Model}</p>
            <p className="car-details">{car.Year}, {car.Km} km</p>
            <p className="location">Baku, {car.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
