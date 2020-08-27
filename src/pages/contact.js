import React from 'react'
import '../css/contact.css'
import Header from '../components/header'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const About = () => {
    return (
        <>
        <Header />
            <div id="contact">
  
                <h1 className="section-header">CONTACT</h1>
                
                <div className="contact-wrapper">
                    

                    
                    <form className="form-horizontal" netlify="true">
                    
                        <div className="form-group">
                            <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
                            </div>
                        </div>

                        
                        <button className="send-button" id="submit" type="submit" value="SEND" placeholder="Send" >
                            SEND
                        
                        </button>
                    
                    </form>
                    
                    
                    <div className="direct-contact-container">

                        <ul className="contact-list">
                        <li className="list-item"><span className="contact-text place">Chicago | IL</span></li>
                        
                        <li className="list-item"><span className="contact-text phone"><a href="tel:96279-202-1638" title="Give me a call">079-202-1638</a></span></li>
                        
                        <li className="list-item"><span className="contact-text gmail"><a href="mailto:ismailmri@mristudios.com" title="Send me an email">ismailmri@mristudios.com</a></span></li>
                        
                        </ul>

                        <hr />
                        <ul className="social-media-list">
                        <li><a href="https://facebook.com"  className="contact-icon">
                            <FacebookIcon style={{textAlign: "center"}} />
                            </a>
                        </li>
                        <li><a href="https://instagram.com"  className="contact-icon">
                            <InstagramIcon style={{textAlign: "center"}} />
                            </a>
                        </li>
                        </ul>
                        <hr />

                        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                    </div>
                    
                </div>
                
                </div>  
                
            </>
  
    )
}

export default About
