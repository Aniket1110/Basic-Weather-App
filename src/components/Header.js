import React from 'react'
import { Icon } from '@iconify/react'
import '../index.css'

const Header = () => {
    return (
        <div>
            <div className="bg-dark text-center p-4 text-light fs-2">
                Weather Check
            </div>
            <div className="row py-3 ">
                <div className="col-2 text-center text-light">
                    <div className="fs-3">
                        <Icon icon="ci:location" />Kolkata,IN
                    </div>
                </div>
                <div className="col-8 text-center text-light">
                    <div>
                        <input type="search" placeholder="Search..." className="py-1 rounded input-field" autoFocus />
                        <i className="fas fa-search text-white btn search-button-background py-1 mb-1 px-3"></i>
                    </div>
                    <div className="my-auto fs-4 pt-4">
                        39 &H8451;
                    </div>

                </div>
                <div className="col-2 align-items-center">
                    <i className="fas fa-cloud-sun " style={{ fontSize: "150px", color: "#3e8dc2" }}></i>
                    <div className="text-light text-center fs-3">Sunny</div>
                </div>
            </div>
        </div>
    )
}

export default Header
