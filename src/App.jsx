import { useState } from "react";
import { formatearFecha } from "./index";

const api = {
  key: "b1783603c43a7a74fdbc0527b91b635d",
  base: "https://api.openweathermap.org/data/2.5/",
  // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const handelBtn = (e) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
      });
  };

  const today = Date.now();

  return (
    // 01- weather.main no sea igual a undefined
    // 02- si la temp es mayor a 16 vamos a poner la clase app warm
    // 03- si temp es menor a 16 vamos a poner la clase app
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />

          <button
            type="submit"
            className="search-btn"
            onClick={handelBtn}
            value="vagfg"
            onKeyDown={search}
          >
            {" "}
            search{" "}
          </button>
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              {/* <div className='date'> {dataBuilder(new Date())}</div> */}
              <div className="date"> {formatearFecha(today)}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/misael282828/weather-app-React.git
git push -u origin main