import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const WeatherInfo = () => {
    const percentage = 66;
    return (
        <div>
            <div className=" d-flex row justify-content-around">
                <div className="col-3 bg-info"></div>
                <div className="col-3 text-center ">
                <CircularProgressbar value={percentage} text={<>27&deg;</>} />;
                </div>
                <div className="col-3 bg-info"></div>
            </div>
        </div>
    )
}

export default WeatherInfo
