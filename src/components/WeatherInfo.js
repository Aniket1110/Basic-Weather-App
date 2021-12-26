import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react';

const WeatherInfo = ({ weatherinfo }) => {
    const { temp, temp_min, temp_max, pressure, humidity,wind_speed, weathertype, icon, clouds} = weatherinfo;
    
    return (
        <div>
            <div className="d-flex row justify-content-around h5 text-light">
                <div className="col-12 col-md-3 my-auto mx-auto">
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
                <div className="col-12 col-md-3 text-center mx-auto">
                    <div className="text-light text-center fs-3">{weathertype}</div>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} height="200px" width="200px" />
                </div>
                <div className="col-12 col-md-3 my-auto mx-auto text-center">
                        <Icon icon="wi:cloud" className="m-2" />Cloudy - {clouds}%<br/>
                        <Icon icon="wi:windy" className="m-2" />Wind - {wind_speed} meter/sec<br/>
                        <Icon icon="wi:humidity" className="m-2" />Humidity - {humidity}%<br/>
                        <i className="fab fa-wpressr m-2"></i>Pressure - {pressure} hPa
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
