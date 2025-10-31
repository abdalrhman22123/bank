import React, { Component } from 'react';
import "./Sus.css"
import Elogo from "../assets/elogo.svg"
import bloom from "../assets/bloom.svg"
import ftlogo from "../assets/ftlogo.svg"
const Inter = () => {
    return ( 
        <>
        <div className='sus'>Sustainable finance</div>
        <div className='integral'> Sustainability is an integral part of the way we <br />
        work</div>
        <div className='logos'>

        <div className='exchange'>
            <div><img src={Elogo} /></div>
            <div className='sp'>S&P/EGX ESG Index</div>
        </div>
        <div className='blooom'>
            <div className='blogo'><img src={bloom} /></div>
            <div className='bloom'>Bloomberg Gender Equality <br />
            Index</div>
        </div>
        <div className='ft'>
            <div><img src={ftlogo} /></div>
            <div>FTSE4Good Index</div>
        </div>
        </div>
        <div className='learrn'>Learn more</div>
        </>
     );
}
 
export default Inter;