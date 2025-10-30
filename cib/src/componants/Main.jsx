import React, { Component } from 'react';
import "./Main.css"
import man from "../assets/man.svg"
const Sec = () => {
    return ( <>
    <img className='man' src={man} alt="man" />        
    <div className='bank'>CIB</div>
    <div className='deliver'>Delivering value to our clients, our <br />
    community and our shareholders</div>
    <button className='btn'>Discover more</button>
    </> );
}
 
export default Sec;