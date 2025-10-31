import React, { Component } from 'react';
import "./Care.css"
import world from "../assets/world.svg"
import phone from "../assets/phone.svg"
import desk from "../assets/desk.svg"
const Care = () => {
    return ( <>
    <div className='care'>We care</div>
    <div className='team'> Our dedicated team is committed to meeting your <br />
    needs</div>
    <div className='sections'>


    <div className='online'>
        <img className='world' src={world} alt="" />
        <div>
            <div className='onn'>Online</div>
            <div>Chat with 'Zaki' our digital <br />
            assistant to guide you through our <br />
            products and services, or reach <br />
            out on social media.</div>
        </div>
    </div>
    <div className='phonesec'>
        <img className='world' src={phone}  />
        <div>
            <div className='onn'>On the phone</div>
            <div>For support, including <br />
            emergencies such as cards <br />
            closure or immediate critical <br />
            feedback.</div>
        </div>
    </div>
    <div className='desksec'>
        <img className='world' src={desk} alt="" />
        <div>
            <div className='onn'>In branch</div>
            <div>Our trained team of tellers and <br />
            relationship managers are here to <br />
            help you get the service you need.</div>
        </div>
    </div>
    </div>
    </> );
}
 
export default Care;