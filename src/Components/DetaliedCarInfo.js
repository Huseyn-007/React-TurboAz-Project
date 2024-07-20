import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import '../assets/DetaliedCarInfo.css';

const DetailedCarInfo = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/cars`)
      .then(response => response.json())
      .then(data => {
        const car = data.find(car => car.id === (id));
        setCar(car);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    car ? (
      <div className="main">  
        <div className="ad-details">
          <div className="ad-title">{`${car.Marka} ${car.Model}, ${car.Engine}, ${car.Year} il, ${car.Km} km`}</div>
          <Slider images={car.Images} />
          <table>
            <tbody>
              <tr>
                <th>Yenilənib</th>
                <td>18.07.2024</td>
                <th>Baxışların sayı</th>
                <td>6543</td>
              </tr>
              <tr>
                <th>Şəhər</th>
                <td>Bakı</td>
                <th>Marka</th>
                <td>{car.Marka}</td>
              </tr>
              <tr>
                <th>Model</th>
                <td>{car.Model}</td>
                <th>Buraxılış ili</th>
                <td>{car.Year}</td>
              </tr>
              <tr>
                <th>Ban növü</th>
                <td>{car.BanType}</td>
                <th>Rəng</th>
                <td>{car.Color}</td>
              </tr>
              <tr>
                <th>Mühərrik</th>
                <td>{car.Engine}</td>
                <th>Yürüş</th>
                <td>{car.Km} km</td>
              </tr>
              <tr>
                <th>Oturacaq sayı</th>
                <td>{car.SeatCount}</td>
                <th>Vəziyyəti</th>
                <td>Yeni</td>
              </tr>
            </tbody>
          </table>
          <div className="ad-description">{car.Description}</div>
        </div>
        <div className="ad-contact-info">
          <div className="ad-price">{car.Price} USD</div>
          <div className="contact-info">
          
            <p>Əlaqə: 101 Auto</p>
            <p>Şəhər: Bakı</p>
          </div>
          <div className="buttons">
            <a href="#">Salona keç</a>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default DetailedCarInfo;
