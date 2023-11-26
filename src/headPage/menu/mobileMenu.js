// import { useState } from "react"
import { Link } from 'react-router-dom'

const MobMobile = ({ setShow }) => {
    return (
        <div className=" bg-primary MobMobile d-md-none col-12 ">
            {/* {
            close
            ? */}
            <div className="border col-12 d-flex justify-conent-start align-items-center">
                <svg onClick={() => { setShow(false) }} fal xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
            {/* :
            null
         }
         {
            close? */}
            <div className="border col-12">
                <ul className="col-6">
                    <li onClick={() => { setShow(false) }}><Link to="">RealState</Link></li>
                    <li onClick={() => { setShow(false) }}><Link to="/portraits">Portraits</Link></li>
                    <li onClick={() => { setShow(false) }}><Link to="/fineArt">FineArt</Link></li>
                    <li onClick={() => { setShow(false) }}><Link to="/about">About</Link></li>
                    <li onClick={() => { setShow(false) }}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* :
        null
         } */}
        </div>
    )
}
export default MobMobile