import React, { Component } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    navbarShow = () =>{
        document.getElementById('nav').classList.toggle('navshow')
    }
    render() {
        return (
            <div>
                <div className="nav-bar" id='navBar'>
                    <div className="logo">
                        <h1>R.C</h1>
                    </div>
                    <div className="nav">
                        <nav id='nav'>
                            <FontAwesomeIcon icon={faTimes} id='navbtn' onClick={this.navbarShow}></FontAwesomeIcon>
                            <ul> 
                                <a href='#home' onClick={this.navbarShow}><li>Home</li></a>
                                <a href='#about' onClick={this.navbarShow}><li>Welcome</li></a>
                                <a href='#menu' onClick={this.navbarShow}><li>Menu</li></a>
                                <a href='#contacts' onClick={this.navbarShow}><li>Reach Us</li></a>
                            </ul>
                        </nav>
                        <FontAwesomeIcon icon={faBars} id='navbtn' onClick={this.navbarShow}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;