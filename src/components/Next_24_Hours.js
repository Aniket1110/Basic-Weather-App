import React from 'react'

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

const TenDays = ({ arr }) => {

    return (

        <div >
            <div className='fs-3 text-center p-3'> Next 24 Hours Forecast</div>

            <div className="d-flex justify-content-around">
                {
                    Object.values(arr).map((e, ind) => {
                        let time = new Date(e.dt * 1000).toString().substring(16, 21);
                        time = format(time);

                        console.log(e)

                        console.log(e.weather.icon)
                        return (
                            <div key={ind}>
                                <p>{time}</p>
                                <div class="card bg-dark">
                
                                    <img class="card-img-top" src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`} height="100px" width="70px"  alt="Card image cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">{e.main.temp}&#8451;</h5>
                                            <h5 class="card-title text-center">{e.weather[0].main}</h5>
                                           
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
