import React from 'react';

let divStyle = {
    lineHeight: '17px',
    padding: '8px 2px'
};

const Footer = () => (
    <div className="footer-area">
        <div className=" footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                        <div className="single-footer">
                            <h4>About us </h4>
                            <div className="footer-title-line"></div>
                            <img src="assets/img/logo/logo.png" className="wow pulse" data-wow-delay="1s"/>
                                <p>A nice description on evo real estate goes here.</p>
                                <ul className="footer-adress">
                                    <li><i className="pe-7s-map-marker strong"> </i> 9089 team evo dr</li>
                                    <li><i className="pe-7s-mail strong"> </i> email@teamevo.com</li>
                                    <li><i className="pe-7s-call strong"> </i> +1 480 123 4567</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                        <div className="single-footer">
                            <h4>Quick links </h4>
                            <div className="footer-title-line"></div>
                            <ul className="footer-menu">
                                <li><a href="/featured">Featured Listings</a>  </li>
                                <li><a href="/about">About Us</a>  </li>
                                <li><a href="/team">Meet the Team</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a>  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                        <div className="single-footer">
                            <h4>Last News</h4>
                            <div className="footer-title-line"></div>
                            <ul className="footer-blog">
                                <li>
                                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                        <a href="single.html">
                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                        </a>
                                        <span className="blg-date">12-12-2016</span>
                                    </div>
                                    <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                        <h6> <a href="single.html">Add news functions </a></h6>
                                        <p style={divStyle}>Lorem ipsum dolor sit amet, nulla ...</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                        <a href="single.html">
                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                        </a>
                                        <span className="blg-date">12-12-2016</span>
                                    </div>
                                    <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                        <h6> <a href="single.html">Add news functions </a></h6>
                                        <p style={divStyle}>Lorem ipsum dolor sit amet, nulla ...</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                        <a href="single.html">
                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                        </a>
                                        <span className="blg-date">12-12-2016</span>

                                    </div>
                                    <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                        <h6> <a href="single.html">Add news functions </a></h6>
                                        <p style={divStyle}>Lorem ipsum dolor sit amet, nulla ...</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                        <div className="single-footer news-letter">
                            <h4>Stay in touch</h4>
                            <div className="footer-title-line"></div>
                            <p>A description telling people to get on our email list.</p>
                            <form>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="E-mail ... "/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x"/></button>
                                        </span>
                                </div>
                            </form>
                            <div className="social pull-right">
                                <ul>
                                    <li><a className="wow fadeInUp animated" href="https://twitter.com/kimarotec"><i className="fa fa-twitter"/></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://www.facebook.com/kimarotec" data-wow-delay="0.2s"><i className="fa fa-facebook"/></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://plus.google.com/kimarotec" data-wow-delay="0.3s"><i className="fa fa-google-plus"/></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.4s"><i className="fa fa-instagram"/></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.6s"><i className="fa fa-dribbble"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
