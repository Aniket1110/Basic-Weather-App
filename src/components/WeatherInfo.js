import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react';


const WeatherInfo = ({ weatherinfo }) => {
    
    // console.log(weatherinfo)
    const { temp, temp_min, temp_max, pressure, humidity,wind_speed, weathertype, icon, clouds} = weatherinfo;
    
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
                        <p>Wind - {wind_speed} meter/sec</p>
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
                </div>
                <div className="col-3 my-auto">
                    <div className="fs-1 text-center p-3">
                        {temp}&#8451;
                    </div>
                    <div className="fs-5 d-flex  justify-content-around p-3">
                        <div className='d-flex'>
                            <Icon icon="akar-icons:arrow-down" className='m-1' />
                            <div>{temp_min}&#8451;</div>
                        </div>
                        <div className='d-flex'>
                            <Icon icon="akar-icons:arrow-up" className='m-1' />
                            <div>{temp_max}&#8451;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
