import React from 'react';

const divStyle = {
    backgroundColor: "#FCFCFC",
    paddingBottom: "55px"
};

const NotFound = () => (
    <div className="content-area error-page" style={divStyle}>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <h2 className="error-title">404</h2>
                    <p>Sorry, the page you requested may have been moved or deleted</p>
                    <a href="/" className="btn btn-default">Home</a>
                </div>
            </div>
        </div>
    </div>
);

export default NotFound;