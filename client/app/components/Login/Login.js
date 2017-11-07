import React, { Component } from 'react';

import Header from '../Header/Header';

const divStyle = {
    backgroundColor: "rgb(249, 249, 249)"
};

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header active="login"/>
                <div className="page-head">
                    <div className="container">
                        <div className="row">
                            <div className="page-head-content">
                                <h1 className="page-title">New account / Sign in</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register-area" style={divStyle}>
                    <div className="container">
                        <div className="col-md-6">
                            <div className="box-for overflow">
                                <div className="col-md-12 col-xs-12 register-blocks">
                                    <h2>New account : </h2>
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-default">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-for overflow">
                                <div className="col-md-12 col-xs-12 login-blocks">
                                    <h2>Login : </h2>
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-default"> Log in</button>
                                        </div>
                                    </form>
                                    <br/>
                                        <h2>Social login :  </h2>
                                        <p>
                                            <a className="login-social" href="#"><i className="fa fa-facebook"></i>&nbsp;Facebook</a>
                                            <a className="login-social" href="#"><i className="fa fa-google-plus"></i>&nbsp;Gmail</a>
                                            <a className="login-social" href="#"><i className="fa fa-twitter"></i>&nbsp;Twitter</a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
