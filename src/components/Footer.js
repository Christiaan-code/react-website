import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className ="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">
                        Cosmo Designs 2020
                    </small>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/christiaan.dupreez.334" 
                        target="_blank"
                        aria-label ="Facebook"
                        className="social-icon-link facebook"
                        rel="noopener noreferrer"
                        >
                            <i className= "fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/thatmanchristiaan/" 
                        target="_blank"
                        aria-label ="Instagram"
                        className="social-icon-link instagram"
                        rel="noopener noreferrer"
                        >
                            <i className= "fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/christiaan-du-preez-1b66491b9/" 
                        target="_blank"
                        aria-label ="LinkedIn"
                        className="social-icon-link linkedin"
                        rel="noopener noreferrer"
                        >
                            <i className= "fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Christiaan-code" 
                        target="_blank"
                        aria-label ="Github"
                        className="social-icon-link github"
                        rel="noopener noreferrer"
                        >
                            <i className= "fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
