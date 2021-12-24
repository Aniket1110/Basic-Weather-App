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
            <div className='fs-3 text-center text-light p-3'> Next 24 Hours Forecast</div>

            <div className="d-flex justify-content-around text-light">

                {
                    Object.values(arr).map((e, ind) => {
                        let time = new Date(e.dt * 1000).toString().substring(16, 21);
                        time = format(time);

                        return (
                            <div key={ind}>
                                {time}
                            </div>
                        );
                    })
                }

            </div>

        </div>

    )
}

export default TenDays
