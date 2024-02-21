import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './views/header/header.js';
import Footer from './views/footer/footer.js';
import SearchBar from './views/searchBar/searchBar.js';
import Results from './views/results/results.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <SearchBar/>
    <Footer/>
  </React.StrictMode>
);

