import React, { Component } from 'react';

import Header from '../Header/Header';

import Featured from './Featured';

import SearchContainer from './SearchContainer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Header active="home"/>
          <SearchContainer/>
          <Featured/>
      </div>
    );
  }
}

export default Home;
