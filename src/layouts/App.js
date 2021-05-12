import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Burger from './Burger';
import Page from './Page';
import Footer from './Footer';

import '../styles/App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header>
          {<Burger />}
        </header>
        <section>
          {<Page />}
        </section>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
