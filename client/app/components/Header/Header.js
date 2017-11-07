import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            home: "",
            featured: "",
            about: "",
            blog: "",
            contact: "",
            login: ""
        };
    }

    componentDidMount() {
        switch (this.props.active) {
            case "home":
                this.setState({home : "active"});
                break;
            case "featured":
                this.setState({featured : "active"});
                break;
            case "about":
                this.setState({about : "active"});
                break;
            case "blog":
                this.setState({blog : "active"});
                break;
            case "contact":
                this.setState({contact : "active"});
                break;
            case "login":
                this.setState({login : "active"});
                break;
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default ">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="/"><img src="assets/img/logo/logo.png" width="200" height="125"/></a>
                    </div>
                    <div className="collapse navbar-collapse yamm" id="navigation">
                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li className="ymm-sw" data-wow-delay="0.1s">
                                <a href="/" className={this.state.home} data-delay="200">Home</a>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.3s"><a href="/property">Featured
                                Listings</a></li>
                            <li className="dropdown ymm-sw " data-wow-delay="0.1s">
                                <a href="/about" data-toggle="dropdown" className={this.state.about} data-hover="dropdown" data-delay="200">About<b className="caret"/></a>
                                <ul className="dropdown-menu navbar-nav">
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/team">Meet the Team</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.2s"><a className={this.state.blog} href="/properties">Blog</a></li>
                            <li className="wow fadeInDown" data-wow-delay="0.5s"><a className={this.state.contact} href="/contact">Contact</a></li>
                            <li className="wow fadeInDown" data-wow-delay="0.5s"><a className={this.state.login} href="/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    };
}

export default Header;
