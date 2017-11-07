import React, { Component } from 'react';

import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <div>
      <div id="preloader">
          <div id="status">&nbsp;</div>
      </div>

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
