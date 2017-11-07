import React, { Component } from 'react';

import Header from '../Header/Header';

import Location from './Location';

const divStyle = {
    backgroundColor: "#FFF"
};

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header active="contact"/>
                <div className="page-head">
                    <div className="container">
                        <div className="row">
                            <div className="page-head-content">
                                <h1 className="page-title">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-area recent-property padding-top-40" style={divStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                                    <p>If you are interested in viewing one of our properties or are looking for an expert real estate agent please fill out the short form. One of our team members will be in contact with you within 24 hours.</p>
                                </div>
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                                <div className="" id="contact1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-map-marker"/>&nbsp;&nbsp;Address</h3>
                                            <p>2301 S. Stearman Rd.
                                            <br/>Chandler, Arizona
                                            <br/>85286
                                            </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-phone"/>&nbsp;&nbsp;Call</h3>
                                            <p><strong>(480) 250 0023</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-envelope"/>&nbsp;&nbsp;Email</h3>
                                            <strong><a href="mailto:">katie@evoaz.com</a></strong>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <Location
                                             googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                             loadingElement={<div style={{ height: `100%` }} />}
                                             containerElement={<div style={{ height: `350px` }} />}
                                             mapElement={<div style={{ height: `100%` }} />} />
                                    </div>
                                    <hr/>
                                    <h2>Contact form</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Firstname</label>
                                                    <input type="text" className="form-control" id="firstname"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Lastname</label>
                                                    <input type="text" className="form-control" id="lastname"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="text" className="form-control" id="email"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input type="text" className="form-control" id="subject"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea id="message" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                                <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"/> Send message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
        
export default Contact;