import React, { Component } from 'react';
import "./Learn.css"
import img1 from "../assets/img1.svg"
import Img2 from "../assets/img2.svg"
import img3 from "../assets/img3.svg"
const Learn = () => {
    return ( 
        <>
        <div className='learn'>Learning Center</div>
        <div className='more'>Learn more about banking and your finances</div>
         <div className='secs'>

        <div className='sec1'>
            <div><img src={img1}  /></div>
            <div className='buy'>Buying and making a home</div>
            <div className='can'>Buying a home can be an emotional process,<br />
            but it&rsquo;s important to approach it <br />
            logically
            </div>
            <div className='read'>Read more</div>
        </div>
        <div className='sec2'>
        <img src={Img2} alt="img2" />
        <div className='travel'>Traveling on a budget</div>
        <div className='all'> So for all of you travelers, take a vacation <br />
        without spending a fortune with these helpful  <br />
        tips and tricks:</div>
        <div className='read'>Read more</div>
        </div>
        <div className='sec3'>
            <img src={img3} alt="img" />
            <div className='uni'>University life tips</div>
            <div className='impact'>The impact of a good education can be 
            transformative.</div>
            <div className='read'>Read more</div>
        </div>
         </div>
         <div className='view'>View more</div>
        

        </>
     );
}
 
export default Learn;