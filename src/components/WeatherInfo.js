import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react';


const format = (str) => {
    
    let hr = parseInt(str.substring( 0, 2))

    if(hr < 12) return str + " AM";
    else if(hr > 12) {
        hr -= 12;

        let s = hr + ":" + str.substring(3,5) + " PM";

        if(hr < 10) return "0"+s;
        else return s;
    }
    else {
        return str + " PM";
    }
}

const WeatherInfo = ({ weatherinfo }) => {
    const { temp,temp_min,temp_max, pressure, humidity, sunrise, sunset, country, speed, weathertype, description, icon, city, clouds, date_time, timezone , dt } = weatherinfo;
    
    let rise_time = new Date(sunrise * 1000).toString().substring(16 , 21);
    let set_time  = new Date(sunset * 1000).toString().substring(16 , 21);

     rise_time = format(rise_time)
     set_time = format(set_time)

    return (
        <div>
            <div className="d-flex row justify-content-around h5 text-light">
                <div className="col-3 my-auto">
                    <div className="d-flex ">
                        <Icon icon="wi:cloud" className="mt-1 mx-1" />
                        <p>Cloudy - {clouds}%</p>
                    </div>

                    <div className="d-flex ">
                        <Icon icon="wi:windy" className="mt-1 mx-1" />
                        <p>Wind - {speed} meter/sec</p>
                    </div>

                    <div className="d-flex ">
                        <Icon icon="wi:humidity" className="mt-1 mx-1" />
                        <p>Humidity - {humidity}%</p>
                    </div>

                    <div className="d-flex ">
                        <i className="fab fa-wpressr mt-1 mx-1"></i>
                        <p>Pressure - {pressure} hPa</p>
                    </div>

                </div>
                <div className="col-3 text-center">
                    <div className="text-light text-center fs-3">{weathertype}</div>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} height="200px" width="200px" />
                    <div className="fs-1">
                        {temp}&#8451;
                    </div>
                    <div className="fs-5 d-flex  justify-content-around p-3">
                        <div>{temp_min}&#8451;</div>
                        <div>{temp_max}&#8451;</div>
                    </div>
                </div>
                <div className="col-3 my-auto">
                    <div className="d-flex">
                        <Icon icon="wi:sunrise" className="mt-1 mx-1" />
                        <p style={{ fontSize: "18px" }}>Sunrise - {rise_time}</p>
                    </div>

                    <div className="d-flex ">
                        <Icon icon="wi:sunset" className="mt-1 mx-1" />
                        <p style={{ fontSize: "18px" }}>Sunset - {set_time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
