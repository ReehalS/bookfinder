import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Footer from './views/footer/footer.js';
import Header from './views/header/header.js';
import SearchBar from './views/searchBar/searchBar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <body>
      <Header/>
      <SearchBar/>
      <Footer/>
    </body>
  </React.StrictMode>
);

