import "./App.css";
import Cars from "./Components/Cars";
import Login from "./Components/Login";
import DetaliedCarInfo from "./Components/DetaliedCarInfo";
import Register from "./Components/Register";
import CreateNewElan from "./Components/CreateNewElan";
import Favorites from "./Components/Favorites"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const user = useSelector(state => state.user.user);
  const [isAnotherPage, setAnotherPage] = useState(true);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="top-bar">
            <section className="topBar-section">
              <a href="https://tap.az/?utm_source=turboaz&amp;utm_medium=desktop-nav&amp;utm_campaign=only-logo">
                Tap.az
              </a>
              <a href="https://bina.az/?utm_source=turboaz&amp;utm_medium=desktop-nav&amp;utm_campaign=only-logo">
                Bina.az
              </a>
              <a href="https://boss.az/?utm_source=turboaz&amp;utm_medium=desktop-nav&amp;utm_campaign=only-logo">
                Boss.az
              </a>
            </section>
            <span className="contact-info">Dəstək: (012) 505-77-55</span>
            <a href="#">Yardım</a>
            <a href="https://ru.turbo.az/">RU</a>
            {!user && <Link to="/login" onClick={() => setAnotherPage(false)}>Giriş</Link>}
            {!user && <Link to="/register" onClick={() => setAnotherPage(false)}>Yeni Hesab</Link>}
            {user && <Link to="/favorites" onClick={() => setAnotherPage(false)}>Seçilmişlər</Link>}
          </div>
          <nav className="header-1 nav-1">
            <Link to="/" onClick={() => setAnotherPage(true)} className="logo">
              TURBO.AZ
            </Link>
            <a href="#">Bütün elanlar</a>
            <a href="#">Salonlar</a>
            <a href="#">Moto</a>
            <a href="#">Ehtiyat hissələr və aksesuarlar</a>
            <a href="#">İcarə</a>
            <Link onClick={() => setAnotherPage(false)} to='/CreateNewElan' className="new-ad">
              + Yeni elan
            </Link>
          </nav>
          {isAnotherPage && (
            <div className="filter-bar">
              <select>
                <option>Marka</option>
              </select>
              <select>
                <option>Model</option>
              </select>
              <div className="radio-buttons">
                <input type="radio" id="all" name="condition" defaultChecked />
                <label htmlFor="all">Hamısı</label>
                <input type="radio" id="new" name="condition" />
                <label htmlFor="new">Yeni</label>
                <input type="radio" id="used" name="condition" />
                <label htmlFor="used">Sürülmüş</label>
              </div>
              <select>
                <option>Şəhər</option>
              </select>
              <input type="text" placeholder="Qiymət, min." />
              <input type="text" placeholder="maks." />
              <select>
                <option>AZN</option>
              </select>
              <button>Kredit</button>
              <button>Barter</button>
              <select>
                <option>Ban növü</option>
              </select>
              <input type="text" placeholder="İl, min." />
              <input type="text" placeholder="maks." />
              <button className="show-ads">Elanları göstər</button>
            </div>
          )}
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Cars />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/CreateNewElan" element={<CreateNewElan />} />
            <Route path="/car/:id" element={<DetaliedCarInfo />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
