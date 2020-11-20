import React, { Component } from 'react';
import img from './azis.png';

class Header extends Component {
    render() {
      return(
          <React.Fragment>
            <div className="photo">
              <img src={img}></img>
            </div>
            <div className="bDetails">
                <a href="https://drive.google.com/file/d/1OoFQU29XlPFfxEboW5nM_tKuf8nJz59E/view?usp=sharing"><button>Download CV</button></a>
                <a href="https://azuhri.github.io/aziszuhrip-resume.github.io/profil.html"><button>My Resume</button></a>
            </div>
            <div className="profile">
              <div className="nama"> 
                <h2>azis zuhri </h2>
                <h1 className="pra">PRATOMO</h1>
                <div className="roleContact">
                  <p>Web Frontend Dev. And IT Sysadmins</p>
                  <div className="sosmed">
                        <a href=""><i className="fas fa-envelope"></i></a>
                        <a href=""><i className="fab fa-facebook-square"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
        </React.Fragment>
      );
    } 
}
export default Header;
