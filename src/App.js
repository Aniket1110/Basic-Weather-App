import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

function App() {
  const [location, setlocation] = useState("Kolkata");
  const [weatherinfo, setweatherinfo] = useState({});
  const [load, setload] = useState(true);

  const getApiData = async () => {

    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=feed9a4423b4e259b9d583ccf7ea7b71`;
      const get = await fetch(url);
      const data = await get.json();

      const { temp,temp_min,temp_max, pressure, humidity } = data.main;
      const { sunrise, sunset, country } = data.sys;
      const { speed } = data.wind;
      const { main: weathertype, description, icon } = data.weather[0];
      const city = data.name;
      const { all: clouds } = data.clouds;
      const date_time = data.dt;
      const timezone = data.timezone;
      const info = { temp, temp_min, temp_max,pressure, humidity, sunrise, sunset, country, speed, weathertype, description, icon, city, clouds, date_time, timezone };

      setload(false);
      setweatherinfo(info);
    }
    catch (e) {
      console.log(e);
    }

  }

  let time = new Date();
  let hour = time.getHours().toString();
  let minute = time.getMinutes().toString();

  if (time.getHours() < 9) hour = "0" + hour;
  if (time.getMinutes() < 9) minute = "0" + minute;

  
  console.log(d);

  let date = time.toString().substring(0,16);
  let hr = parseInt(time.toString().substring(17,18));
  console.log(time.toString());
  console.log(hr);

  var d;

  if(hr < 12) {

    d = hour + ":" + minute + " AM";
  }
  else {
    d = hour + ":" + minute + " PM";
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div className="App bg-dark">
      <div>
        <div className="bg-dark text-center p-4 text-light fs-2">
          Weather Check
        </div>
        <div className="row py-3">
          <div className="col-3  text-light">
            <div className="fs-3 mx-5">
              <Icon icon="ci:location" />{weatherinfo.city},{weatherinfo.country}
            </div>
          </div>
          <div className="col-6 text-center text-light">
            <div>
              <input type="search" placeholder="Search..." className="py-1 rounded input-field" autoFocus onChange={(e) => setlocation(e.target.value)} />
              <i className="fas fa-search text-white btn search-button-background py-1 mb-1 px-3" onClick={getApiData}></i>
            </div>

          </div>
          <div className="col-3">
            <div className="fs-4 text-light ">
              
               <p>{date}</p>
               <p>{d}</p>
            </div>
          </div>
        </div>
      </div>
      <WeatherInfo weatherinfo={weatherinfo} />
      <Footer />
    </div>
  );
}

export default App;
