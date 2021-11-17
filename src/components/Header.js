import React from 'react'
import { Icon } from '@iconify/react'


const Header = () => {
    return (
        <div>
            <div className="bg-dark text-center p-4 text-light fs-2">
                Weather Check
            </div>
            <div className="row py-3 ">
                <div className="col-2 text-center text-light">
                    <div className="fs-2">
                        <Icon icon="ci:location" />Kolkata,IN
                    </div>
                    <div className="fs-4">
                        <Icon icon="ic:baseline-date-range" className="fs-3" /> 17/11/2021
                    </div>
                </div>
                <div className="col-8 text-center text-light">
                    <Icon icon="ant-design:search-outlined" className="fs-3" />
                    <input type="search" placeholder="search..." className="px-3 py-1 rounded" autoFocus />
                </div>
                <div className="col-2">
                    <i className="fas fa-cloud-sun text-secondary " style={{ fontSize: "150px" }}></i>
                </div>
            </div>
        </div>
    )
}

export default Header
