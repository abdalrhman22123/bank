import React, { Component } from 'react';
import "./Award.css"
import cash from "../assets/cash.svg"
import building from "../assets/building.svg"
import bank from "../assets/bank.svg"
const Ward = () => {
    return ( 
        <>
        <div className='award'>Award</div>
        <div className='quality'> CIB's integrity and quality are recognized <br />
        internationally</div>
        <div className='asec'>

        <div className='cashsec'>
            <div className='cash'><img src={cash} /></div>
            <div className='priv'>Best Private Bank in Egypt</div>
            <div className='global'>Global Finance - 2023</div>
        </div>
        <div className='buildsec'>
            <div className='building'><img src={building}  /></div>
            <div className='merge'>Best Mergers & Acquisitions <br />
            Deal in MENA</div>
            <div className='fin'>EMEA Finance - 2023</div>
        </div>
        <div className='banksec'>
            <div className='bankk'><img src={bank} alt="" /></div>
            <div className='egypt'>Best Bank in Egypt</div>
            <div className='euro'>Euromoney - 2023</div>
        </div>
        </div>
        <div className='our'>See all our awards</div>
        </>
     );
}
 
export default Ward;