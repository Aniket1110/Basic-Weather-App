import React from 'react'
import { Icon } from '@iconify/react';

import '../index.css';

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

const TenDays = ({ weatherinfo }) => {

    const { daily } = weatherinfo;

    console.log(daily)

    return (

        <div >
            {/* <div className='fs-3 text-center p-3'></div> */}

            <div className="d-flex scroll mx-5">
                {
                    daily.map((e, ind) => {
                        let time = new Date(e.dt * 1000).toString().substring(0, 3);

                        return (
                            <div key={ind}>
                                <p className='text-center fs-5'>{time}</p>
                                <div class="card bg-dark mx-1 shadow p-3 mb-5 rounded">
                                    <img class="card-img-top" src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`} height="100px" width="50px" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center mb-3">{e.weather[0].main}</h5>
                                        <h5 class="card-title text-center">{e.feels_like.day}&#8451;</h5>
                                        <div className="d-flex  justify-content-between">
                                            <div className='d-flex mx-1'>
                                                <Icon icon="akar-icons:arrow-down" className='m-1' />
                                                <div>{e.temp.min}&#8451;</div>
                                            </div>
                                            <div className='d-flex mx-1'>
                                                <Icon icon="akar-icons:arrow-up" className='m-1' />
                                                <div>{e.temp.max}&#8451;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

        </div>

    )
}

export default TenDays
