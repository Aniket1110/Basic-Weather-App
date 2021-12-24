import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import TenDays from "./components/Next_24_Hours";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Divider from "./components/Divider";

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
  const [load, setload] = useState(true);
  const [weatherHour, setweatherHour] = useState({});

  const getApiData = async () => {

    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=8&appid=${process.env.REACT_APP_API_KEY}`;

      const get = await fetch(url);
      const data = await get.json();

      const { temp, temp_min, temp_max, pressure, humidity } = data.main;
      const { sunrise, sunset, country } = data.sys;
      const { speed } = data.wind;
      const { main: weathertype, description, icon } = data.weather[0];
      const dt = data.dt;
      const city = data.name;
      const { all: clouds } = data.clouds;
      const date_time = data.dt;
      const timezone = data.timezone;
      const info = { temp, temp_min, temp_max, pressure, humidity, sunrise, sunset, country, speed, weathertype, description, icon, city, clouds, date_time, timezone, dt };

      const get2 = await fetch(url2);
      const data2 = await get2.json();

      const arr = data2.list;

      setload(false);
      setweatherinfo(info);
      setweatherHour(arr);
    }
    catch (e) {
      console.log(e);
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
      <div>
        <div className="text-center p-4 fs-2">
          Weather Check
        </div>
        <div className="row py-3">
          <div className="col-3">
            <div className="fs-3 mx-5">
              <Icon icon="ci:location" />{weatherinfo.city},{weatherinfo.country}
            </div>
          </div>
          <div className="col-6 text-center">
            <div>
              <input type="search" placeholder="Search..." className="py-1 rounded input-field" autoFocus onChange={(e) => setlocation(e.target.value)} />
              <i className="fas fa-search btn search-button-background py-1 mb-1 px-3" onClick={getApiData}></i>
            </div>
          </div>
          <div className="col-3">
            <div className="fs-4">
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
      <WeatherInfo weatherinfo={weatherinfo} />
      <Divider>X</Divider>
      <TenDays arr={weatherHour} />
      <Footer />
    </div>
  );
}

export default App;
