import React, { Component } from 'react';
import "./adv.css"
import Img4 from "../assets/img4.svg"
const Adver = () => {
    return ( 
        <div className='nbox'>
                    <img src={Img4}  />
                    <div className='boxx'>
                    <div>08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI <br />
                    Capital to Successfully Closes the Seventh Securitization Bond Issuance for <br />
                    Halan Consumer Finance, Worth EGP 3.4 Billion</div>
                    <div className='comm'>Commercial International Bank (CIB) Has Partnered <br />
                    with CI Capital to Successfully Closes the Seventh <br />
                    Securitization Bond Issuance for Halan Consumer <br />
                    Finance, Worth EGP 3.4 Billion</div>
                    <div className='lead'>CIB, Egypt's leading and largest private sector bank, has successfully partnered <br />
                    with CI Capital to complete the seventh issuance for Halan Consumer Finance, <br />
                    valued at EGP 3.4 billion.</div>
                    </div>
                </div>
     );
}
 
export default Adver;