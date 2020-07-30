import React, { Component } from 'react';
import './home.css'
import Navbar from './../nav/Navbar.js'

const Home=()=> {
        return (
            <div>
                {/* <Navbar /> */}
                <div className="hero">
                    <h2 style={{position: 'absolute', color: 'white', paddingLeft: '10px'}}>Hair By Kacy</h2>
                </div>
                
                <div className="aboutSection">
                    <div className="aboutContent">
                        <h1>ABOUT</h1>
                        <p>aslkda asdlkas dalkd ad asdkla</p>
                        <p>aslkda asdlkas dalkd ad asdkla</p>
                        <p>aslkda asdlkas dalkd ad asdkla</p>
                        <p>aslkda asdlkas dalkd ad asdkla</p>
                    </div>
                </div>


                <div className="workSection">
                    <h1>MY WORK</h1>
                    <div className='gallery'>
            
                    </div>
                </div>


                <div className="faqSection">
                    <div className="faqContent">
                        <h1>THINGS TO KNOW</h1>
                        <ul>
                            <li>[question]</li>
                            <li>[question]</li>
                            <li>[question]</li>
                            <li>[question]</li>
                        </ul>
                    </div>
                </div>

                <div className="contactSection">
                    <h1>APPOINTMENT INQUIRY</h1>
                </div>
            </div>
        );
}

export default Home;