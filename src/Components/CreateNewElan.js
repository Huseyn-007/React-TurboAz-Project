import React, { useState } from 'react';
import '../assets/CreateNewElan.css';

const CreateNewElan = () => {
  const [formData, setFormData] = useState({
    Marka: '',
    Model: '',
    Year: '',
    BanType: '',
    Color: '',
    Engine: '',
    Km: '',
    SeatCount: '',
    Description: '',
    Images: [],
    Price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, Images: [...formData.Images, ...images] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.Images.length < 3) {
      alert('Zehmet olmasa minimum 3 sekil elave edin');
      return;
    }

    const newFormData = {
      ...formData,
      Km: parseInt(formData.Km),
      Year: parseInt(formData.Year),
      SeatCount: parseInt(formData.SeatCount),
      Price: parseInt(formData.Price)
    };

    fetch('http://localhost:3002/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFormData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <div className="form-column">
        <label>
          Marka:
          <input type="text" name="Marka" value={formData.Marka} onChange={handleChange} />
        </label>
        <label>
          Model:
          <input type="text" name="Model" value={formData.Model} onChange={handleChange} />
        </label>
        <label>
          İl:
          <input type="number" name="Year" value={formData.Year} onChange={handleChange} />
        </label>
        <label>
          Ban növü:
          <input type="text" name="BanType" value={formData.BanType} onChange={handleChange} />
        </label>
        <label>
          Rəng:
          <input type="text" name="Color" value={formData.Color} onChange={handleChange} />
        </label>
      </div>
      <div className="form-column">
        <label>
          Mühərrik:
          <input type="text" name="Engine" value={formData.Engine} onChange={handleChange} />
        </label>
        <label>
          Yürüş:
          <input type="number" name="Km" value={formData.Km} onChange={handleChange} />
        </label>
        <label>
          Oturacaq sayı:
          <input type="number" name="SeatCount" value={formData.SeatCount} onChange={handleChange} />
        </label>
        <label>
          Təsvir:
          <textarea name="Description" value={formData.Description} onChange={handleChange}></textarea>
        </label>
        <label>
          Qiymət:
          <input type="number" name="Price" value={formData.Price} onChange={handleChange} />
        </label>
      </div>
      <div className="form-bottom">
        <label>
          Şəkil əlavə et:
          <input type="file" multiple onChange={handleImageChange} />
        </label>
        <div className="image-preview">
          {formData.Images.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} />
          ))}
        </div>
        <button type="submit">Elani Yerləşdir</button>
      </div>
    </form>
  );
};

export default CreateNewElan;
