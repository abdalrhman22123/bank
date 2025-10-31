import React, { Component } from 'react';
import Nav from '../componants/nav';
import Navbar from '../componants/Navbar';
import Sec from '../componants/Main';
import App from '../componants/Sub';
import "./feed.css"
import Apply from '../componants/Section';
import Learn from '../componants/Learn';
import New from '../componants/News';
import Sect from '../componants/Scale';
import Inter from '../componants/Sus';
import Ward from '../componants/Award';
import Care from '../componants/Care';

const Home = () => {
    return ( 
        <>
        <Navbar />
        <Sec />
        <App />
        <div className='sub'>

        <App title='Apply Online'/>
        <App title='News'/>
        <App title='Blog Articles'/>
        <App title='CIB International'/>
        <App title='Sustainable Finance'/>
        <App title='Awards'/>
        </div>
        <Apply />
        <Learn />
        <New />
        <Sect />
        <Inter />
        <Ward />
        <Care />
        </>
     );
}
 
export default Home;