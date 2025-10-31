import React, { Component } from 'react';
import "./News.css"

import Adver from './adv';
const New = () => {
    return ( 
        <>
        <div className='news'>News</div>
        <Adver />
        <Adver />
        <Adver />
        <div className='van'>View all news</div>
        </>
     );
}
 
export default New;