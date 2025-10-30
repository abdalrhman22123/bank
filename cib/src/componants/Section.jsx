import React, { Component } from 'react';
import "./Section.css"
import icon from "../assets/icon.svg"
import wallet from "../assets/wallet.svg"
import paper from "../assets/paper.svg"
const Apply = () => {
    return ( 
        <>
        <div className='aply'>Apply Online</div>
        <div className='on'>Apply online now for cards and loans with ease!</div>
        <div className='boxes'>

        <div className='box1'>
            <div><img src={icon} alt="icon" /></div>
            <div>Apply for a New <br />
            Account</div>
        </div>
        <div className='box2'>
            <div><img src={wallet} alt="wallet" /></div>
            <div>Apply for a card</div>
            </div>   
        <div className='box3'>
            <div><img src={paper} alt="paper" /></div>
            <div>Apply for a loan or <br />
                 overdraft
            </div>
        </div>
        </div>     
        </>
     );
}
 
export default Apply;