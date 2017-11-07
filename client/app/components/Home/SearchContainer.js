import React, { Component } from 'react';

import { Collapse } from 'react-collapse';

import Map from './Map';

const divStyle = {
    display: "none"
};

const searchButton = {
    backgroundColor: "#e67e22",
    color: "#FFF",
    padding: "7px 12px"
};

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchView: true,
            mapView: false
        };
    }

    activateSearch() {
        this.setState({
            searchView: !this.state.searchView,
            mapView: !this.state.mapView
        });
    }

    render() {
        return (
            <div>
                <Collapse isOpened={this.state.searchView}>
                    <div className="slider-area">
                        <div className="slider">
                            <div id="bg-slider" className="owl-carousel owl-theme">
                                <div className="item"><img src="assets/img/landing/landing-2.jpg" alt=""/></div>
                                <div className="item"><img src="assets/img/landing/landing-1.jpg" alt=""/></div>
                                <div className="item"><img src="assets/img/landing/landing-3.jpg" alt=""/></div>
                            </div>
                        </div>
                        <div className="slider-content">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                                    <h2>arizona real estate hub</h2>
                                    <div className="search-form wow pulse" data-wow-delay="0.8s">
                                        <form action="" className=" form-inline">
                                            <button className="btn toggle-btn" style={searchButton} type="button"><i className="fa fa-bars"/></button>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Key word"/>
                                            </div>
                                            <div className="form-group">
                                                <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                    <option>New york, CA</option>
                                                    <option>Paris</option>
                                                    <option>Casablanca</option>
                                                    <option>Tokyo</option>
                                                    <option>Marraekch</option>
                                                    <option>kyoto , shibua</option>
                                                </select>
                                            </div>
                                            <a className="btn" type="button" style={searchButton} onClick={() => this.activateSearch()}><i className="fa fa-search"/></a>
                                            <div style={divStyle} className="search-toggle">
                                                <div className="search-row">
                                                    <div className="form-group mar-r-20">
                                                        <label htmlFor="price-range">Price Range:</label>
                                                        <input type="text" className="span2" value="" data-slider-min="100000"
                                                               data-slider-max="2000000" data-slider-step="50000"
                                                               data-slider-value="[100000,2000000]" id="price-range"/><br />
                                                        <b className="pull-left color">100,000</b>
                                                        <b className="pull-right color">2,000,000+</b>
                                                    </div>
                                                    <div className="form-group mar-l-20">
                                                        <label htmlFor="property-geo">Square Feet:</label>
                                                        <input type="text" className="span2" value="" data-slider-min="500"
                                                               data-slider-max="5000" data-slider-step="100"
                                                               data-slider-value="[500,5000]" id="property-geo"/><br />
                                                        <b className="pull-left color">500</b>
                                                        <b className="pull-right color">5,000+</b>
                                                    </div>
                                                </div>
                                                <div className="search-row">
                                                    <div className="form-group mar-r-20">
                                                        <label htmlFor="price-range">Min Baths:</label>
                                                        <input type="text" className="span2" value="" data-slider-min="1"
                                                               data-slider-max="5" data-slider-step="1"
                                                               data-slider-value="[1,5]" id="min-baths"/><br />
                                                        <b className="pull-left color">1</b>
                                                        <b className="pull-right color">5+</b>
                                                    </div>
                                                    <div className="form-group mar-l-20">
                                                        <label htmlFor="property-geo">Min Bed:</label>
                                                        <input type="text" className="span2" value="" data-slider-min="1"
                                                               data-slider-max="5" data-slider-step="1"
                                                               data-slider-value="[1,5]" id="min-bed"/><br />
                                                        <b className="pull-left color">1</b>
                                                        <b className="pull-right color">5+</b>
                                                    </div>
                                                </div>
                                                <br/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <Collapse isOpened={this.state.mapView}>
                    <Map isMarkerShown={false}
                         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                         loadingElement={<div style={{ height: `100%` }} />}
                         containerElement={<div style={{ height: `650px` }} />}
                         mapElement={<div style={{ height: `100%` }} />} />
                </Collapse>
                <a onClick={() => this.activateSearch()}><i className="fa fa-search"/></a>
            </div>
        );
    }
}

export default SearchContainer;