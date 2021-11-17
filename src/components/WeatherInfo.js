import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";

const WeatherInfo = () => {
    return (
        <div>
            <div className=" d-flex row justify-content-around">
                <div className="col-3 bg-info p-4"></div>
                <div className="col-3  p-4 text-center mt-n5 ">
                    <SemiCircleProgressBar
                        stroke = "#57799a"
                        strokeWidth = "15"
                        percentage={33}
                        diameter = "320"
                    />;
                </div>
                <div className="col-3 bg-info p-4"></div>
            </div>
        </div>
    )
}

export default WeatherInfo
