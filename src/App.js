import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import TenDays from "./components/Next_7_Days";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Divider from "./components/Divider";
import axios from "axios";

const format = (str) => {

  let hr = parseInt(str.substring(0, 2))

  if (hr < 12) return str + " AM";
  else if (hr > 12) {
    hr -= 12;

    let s = hr + ":" + str.substring(3, 5) + " PM";

    if (hr < 10) return "0" + s;
    else return s;
  }
  else {
    return str + " PM";
  }
}

function App() {
  const [location, setlocation] = useState("Kolkata");
  const [weatherinfo, setweatherinfo] = useState({});
  const [loading, setloading] = useState(false);

  const getApiData = async () => {

    const api_key = process.env.REACT_APP_API_KEY;
    try {

      const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`)
        .then(
          res => {
            return res.data;
          }
        )
        
      const data2 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${api_key}`)
        .then(
          res2 => {
            return res2.data;
          }
        )

      const city = data.name;
      const { country } = data.sys;
      const { dt, sunrise, sunset, feels_like: temp, pressure, humidity, clouds, wind_speed } = data2.current;
      const { main: weathertype, icon } = data2.current.weather[0];
      const { temp_min, temp_max } = data.main;
      const daily = data2.daily;

      const info = { city, country, dt, sunrise, sunset, temp, pressure, humidity, clouds, wind_speed, weathertype, icon, temp_max, temp_min, daily };


      setweatherinfo(info);
      setloading(true);

    }
    catch (e) {
      alert('Enter Valid city name')
    }

  }

  let date_time = new Date(weatherinfo.dt * 1000).toString();
  let date = date_time.substring(0, 16);
  let time = date_time.substring(16, 21);

  time = format(time)

  useEffect(() => {
    getApiData();
  }, [])

  return (

    <div className="App bg-dark text-light">
      {
        loading ?
          (
            <div>
              <div className="text-center p-4 fs-2">
                Weather Check
              </div>
              <div className="row py-3">
                <div className="col-12 col-md-3  text-center">
                  <div className="fs-3 mx-5">
                    <Icon icon="ci:location" />{weatherinfo.city},{weatherinfo.country}
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center p-3">
                  <div>
                    <input type="search" placeholder="Search..." className="py-1 rounded input-field" autoFocus onChange={(e) => setlocation(e.target.value)} />
                    <i className="fas fa-search btn search-button-background py-1 mb-1 px-3" onClick={getApiData}></i>
                  </div>
                </div>
                <div className="col-12 col-md-3 text-center">
                  <div className="fs-4">
                    <p>{date},{time}</p>
                  </div>
                </div>
              </div>
              <WeatherInfo weatherinfo={weatherinfo} />
              <Divider>X</Divider>
              <TenDays weatherinfo={weatherinfo} />
              <Footer />
            </div>
          ) : (<div className="d-flex justify-content-center align-items-center h-100">
            <div class="spinner-grow text-primary" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-info" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-light" role="status">
              <span class="sr-only"></span>
            </div>
            <div class="spinner-grow text-dark" role="status">
              <span class="sr-only"></span>
            </div>
          </div>)
      }
    </div>
  );
}

export default App;
