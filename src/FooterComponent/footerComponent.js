import React, { Component } from 'react';
import './footerComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationPin,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return (
            <div className='footerComponent'>
              <div className='container4'>
                  <div id='content'>
                    <section id='contacts'>
                      <h1>contact us</h1>
                      <div className='icons'>
                        <a href='tel:+254 769160093'><FontAwesomeIcon icon={faPhone} className='phone'></FontAwesomeIcon></a>
                        <a href='https://wa.me/ +254 111482180'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp'></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/jaymoh__254/"><FontAwesomeIcon icon={faInstagram} className='ig'></FontAwesomeIcon></a>
                        <a href='mailto:jamesmumo443@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='fb'></FontAwesomeIcon></a>
                      </div>
                      
                    </section>
                    <section id='location'>
                      <h1>Physical location</h1>
                      <i><FontAwesomeIcon icon={faLocationPin} id='loc'></FontAwesomeIcon>   Along Wote-Machakos road on slopes of Makongo</i>
                      <h1 className='hourh1'>HOURS</h1>
                      <div className='hours'>
                        <section>
                          <h3>Monday-Thursday</h3>
                          <p>4:30AM - 10:00 PM</p>
                        </section>
                        <section>
                          <h3>Friday & Saturday</h3>
                          <p>4:00AM - 11:30 PM</p>
                        </section>
                        <section>
                          <h3>Outside Catering</h3>
                          <p>Available for events</p>
                        </section>
                      </div>
                    </section>
                  </div>
                  <section className='copyright'>
                    <p>&copy;<span>{new Date().getFullYear()}</span>  <a href='https://james-mumo.000webhostapp.com/' target='_blank'>JayTech</a>  | All Rights Reserved</p>
                  </section>
              </div>
          </div>
        );
    }
}
export default Footer;