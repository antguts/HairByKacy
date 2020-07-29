import React, { Component } from 'react';
import './navbar.css'


const Navbar =()=> {

    const openNav=()=> {
        document.getElementById("mySidenav").style = "width: 100%; height:100%";
    }
    const closeNav=()=> {
        document.getElementById("mySidenav").style = "width: 0; height:0";
    }

        return (
            <div className="nav">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" style={{color: 'white'}}onClick={()=>closeNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <span style={{fontSize: '30px', cursor:'pointer'}} onClick={()=>openNav()}>&#9776; </span>

            </div>
        );
}

export default Navbar;