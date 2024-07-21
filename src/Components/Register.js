import React, { useState } from "react";
import "../assets/Register.css"; // Stil dosyasını ekleyelim

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      alert("User already exists");
      return;
    }

    const newUser = { username, password, favorites: [] };
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        alert("User registered successfully");
      } else {
        alert("Failed to register");
      }
    } catch (error) {
      alert("Failed to register");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="register-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;