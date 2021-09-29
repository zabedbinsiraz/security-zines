import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-dark" style={{marginTop:"5%"}}>

        <section className="newsletter-subscribe subscribe">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center subscribe-title">
                        Subscribe for weekly comics
                    </h2>
                    <p className="text-center subscribe-text">
                        No spams, just a single page comics weekly. Like
                        <a href="/">this</a>
                        one.
                    </p>
                </div>
                <form className="d-flex flex-wrap justify-content-center" action="">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="your email" style={{background:"whitesmoke", marginRight: "3px"}} />
                    </div>
                    <div className="mb-3">
                        <button class="btn btn-primary subs-btn">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <div className="container">
            <div className="col item social" style={{marginTop:"0"}}>
            <a href="/" style={{width:"41px",height:"40px"}}>
            <i className="icon icon-social-facebook" style={{fontSize:"36px"}}></i>
            </a>
            </div>
            <p className="copyright">
                all rights reserved
            </p>
        </div>

    </footer>
    );
};

export default Footer;