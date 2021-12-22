import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react';

const WeatherInfo = ({ weatherinfo }) => {
    const { temp,temp_min,temp_max, pressure, humidity, sunrise, sunset, country, speed, weathertype, description, icon, city, clouds, date_time, timezone } = weatherinfo;
    
    let time = new Date(sunset * 1000);
    let hour = time.getHours().toString();
    let minute = time.getMinutes().toString();

    if (time.getHours() < 9) hour = "0" + hour;
    if (time.getMinutes() < 9) minute = "0" + minute;

    let sun_set = hour + ":" + minute + " PM";

    let time2 = new Date(sunrise);

    let hour2 = time2.getHours().toString();
    let minute2 = time2.getMinutes().toString();

    if (time2.getHours() < 9) hour2 = "0" + hour2;
    if (time2.getMinutes() < 9) minute2 = "0" + minute2;

    let sun_rise = hour2 + ":" + minute2 + " AM";



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
                        <p style={{ fontSize: "18px" }}>Sunrise - {sun_rise}</p>
                    </div>

                    <div className="d-flex ">
                        <Icon icon="wi:sunset" className="mt-1 mx-1" />
                        <p style={{ fontSize: "18px" }}>Sunset - {sun_set}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
