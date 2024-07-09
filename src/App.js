import logo from "./logo.svg";
import "./App.css";
import Cars from "./Components/Cars";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div class="top-bar">
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
            <span class="contact-info">Dəstək: (012) 505-77-55</span>
            <a href="#">Yardım</a>
            <a href="https://ru.turbo.az/">RU</a>
            <a href="#">Seçilmişlər</a>
            <Link to="/login">Giriş</Link>
          </div>
          <nav class="header-1 nav-1">
            <a href="#" class="logo">
              TURBO.AZ
            </a>
            <a href="#">Bütün elanlar</a>
            <a href="#">Salonlar</a>
            <a href="#">Moto</a>
            <a href="#">Ehtiyat hissələr və aksesuarlar</a>
            <a href="#">İcarə</a>
            <a href="#" class="new-ad">
              + Yeni elan
            </a>
          </nav>
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
        </header>
        <main>
         <Routes>
           <Route exact path="/" element={<Cars></Cars>} />
           <Route path="/login" element={<Login></Login>} />
         </Routes> 
        </main>
      </div>
    </Router>
  );
}

export default App;

       